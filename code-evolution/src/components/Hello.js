import React from "react";

const Hello = () => {
    return (
        <div>
           <h1>Hello Tandy</h1>
        </div>
    )

    /* same can be written without using jsx
    
    return React.createElement("div", null, React.createElement("h1", null, "Hello Tandy"))
    --> instead of null value above we can have objects eg: {id : "hello, className : "dummyClass"}
    
    */
}
export default Hello;