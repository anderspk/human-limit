import React from "react";
import { ReactComponent as Brain } from "./brain.svg";

const SVG = ({ type, ...rest }) => {
  switch (type) {
    case "brain":
      return <Brain {...rest} />;

    default:
      throw new Error("No SVG with given type");
  }
};

export default SVG;
