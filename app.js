const parent=React.createElement("div", {id:"parent"},[
   
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am an h1 tag"),
            React.createElement("h2",{},"I am an h2 tag")
        ]),
    
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")]),
]);
/// It has become very complicated that's why we have jsx

const heading2 =React.createElement("h1",
    {id:"heading",xyz:"abc"},
    "Hello World from react!")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);