import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  messge: "Loading ...",
};

export default Spinner;
