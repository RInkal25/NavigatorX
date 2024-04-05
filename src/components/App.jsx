import React from "react";
import CreateGrids from "./CreateGrids";
function App() {
  return (
    <div>
      <div  className="heading">
        <h1>Lets search the route</h1>
        {/* <button className = "btn reset btn-lg btn-info" >Help</button> */}
      </div>
      <CreateGrids />
      <div className="copyright"><h6>Made with ❤️ Rinkal Mistry</h6></div>
    </div>
  );
}

export default App;