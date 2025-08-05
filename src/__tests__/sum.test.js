import {Sum} from "../components/Sum";
test("sum function should caluculate the sum of two numbers",()=>{
    const result =Sum(3,4);
    //Assertion
    expect(result).toBe(7);
});