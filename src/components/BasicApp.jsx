import React, { useState } from "react";

const Root = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      Hello React <span style={{ fontWeight: 600 }}>Hot Loader!</span>
      <form>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Root;
