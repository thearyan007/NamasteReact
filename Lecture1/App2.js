//  need to create the folowing structure:
/* 
    <div id = "root">
        <div id = "parent">
            <div id = "child1">
                <h1>H1 tag</h1>
                <h2>H2 tag</h2>
            </div>
            <div id = "child2">
                <h1>H1 tag</h1>
                <h2>H2 tag</h2>
            </div>
        </div>
    </div> 

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
