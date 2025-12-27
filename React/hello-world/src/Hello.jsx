import React from "react";

export const Hello = () => {
    return <div id= "container">
        <h1>Hello Amin</h1>
    </div>
}

export const HelloWithOutJSX = () => {
    return React.createElement("div", {id: "container"},
        React.createElement("h1", null, "Hello Amin....")
    );
}