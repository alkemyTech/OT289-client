import React from "react";
import ColorRing from "react-loader-spinner/dist/loader/ColorRing";

const Loader = ({ render = true, height = "100", width = "100" }) => {
  return (
    <div>
      <ColorRing
        visible={render}
        height={height}
        width={width}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
