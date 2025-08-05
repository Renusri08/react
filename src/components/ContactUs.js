const ContactUS=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact US Page</h1> 
            <form>
                <input type="text" className="border border-black p-2 m-2" place-holder="name"/>
                <input type="text" className="border border-black p-2 m-2" place-holder="name"/>
                <button className="border border-black p-2 m-2 bg-green-300 rounded-2xl">Submit</button>
            </form>
        </div>
    )
};
export default ContactUS;