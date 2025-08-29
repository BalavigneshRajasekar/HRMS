import React from "react";

function Nav() {
  return (
    <>
      <div className="bg-blue-300 h-16 flex justify-between p-3">
        <div>
          <h1 className="tracking-widest">HRMS</h1>
        </div>
        <div>
          <button className="bg-green-800">Login</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
