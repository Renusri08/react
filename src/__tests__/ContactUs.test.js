import {render,screen} from "@testing-library/react";//this should be included if we want to render any react component.
import ContactUS from "../components/ContactUs";
import "@testing-library/jest-dom";//needed to use toBeInTheDocument functtion

test("should heading loaded in contact us component",()=>{
    render(<ContactUS/>);

    const x=screen.getByRole("heading");
    //it will find the all headings inside the contactus component.
    //or
    //const x=screen.getByRole("button");
    //or
    //const x=screen.getByText("Contact US Page");
    //we have many methods like this to access anything on the screen

    expect(x).toBeInTheDocument();//checking whether it is in the screen or not
})



test("checking using getByText contact us component",()=>{
    render(<ContactUS/>);

    //const x=screen.getByRole("heading");
    //it will find the all headings inside the contactus component.
    //or
    //const x=screen.getByRole("button");
    //or
    const x=screen.getByText("Contact US Page");
    //we have many methods like this to access anything on the screen

    expect(x).toBeInTheDocument();//checking whether it is in the screen or not
})

test("should button loaded in contact us component",()=>{
    render(<ContactUS/>);

    //const x=screen.getByRole("heading");
    //it will find the all headings inside the contactus component.
    //or
    const x=screen.getByRole("button");
    //or
    //const x=screen.getByText("Contact US Page");
    //we have many methods like this to access anything on the screen

    expect(x).toBeInTheDocument();//checking whether it is in the screen or not
})

test("checking using getAllByPlaceholderText contact us component",()=>{
    render(<ContactUS/>);

    //const x=screen.getByRole("heading");
    //it will find the all headings inside the contactus component.
    //or
    //const x=screen.getByRole("button");
    //or
    //const x=screen.getByText("Contact US Page");
    //we have many methods like this to access anything on the screen

    const x=screen.getByPlaceholderText("name");

    expect(x).toBeInTheDocument();//checking whether it is in the screen or not
})