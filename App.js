const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello World"),
    React.createElement("h2", null, "This is a h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", null, "This is a h3"),
    React.createElement("h4", null, "This is a h4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
