import React, { useState } from "react";

const Root = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      Hello Rdeact <span style={{ fontWeight: 400 }}>Hot Loader!</span>
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
