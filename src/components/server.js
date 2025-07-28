const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/swiggy", async (req, res) => {
  try {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

    const response = await fetch(swiggyURL, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        Accept: "*/*",
        "Content-Type": "application/json",
        Referer:
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
        Cookie:
          "_device_id=76c2bc67-c937-2406-e490-de6d7a7311b7; _sid=lxke5725-4b3d-48c8-8a0d-487c7d921db8; _ga=GA1.1.1533128893.1753210898; __SW=yURsxE9PMWwqwGBM0h1_J15OgtA_7l0p", // ⛔ Use your own cookies here
        Platform: "dweb",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Swiggy rejected", code: response.status });
    }

    const json = await response.json();
    res.json(json);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed", detail: err.message });
  }
});

app.listen(3001, () => {
  console.log("Proxy running at http://localhost:3001/api/swiggy");
});
