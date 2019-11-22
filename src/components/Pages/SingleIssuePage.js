//Take the props from the DashboardGrid component

import React from "react";

function SingleIssuePage(props) {
  return (
    <div className="props">
      <h1>Issue; {props.Issue}</h1>
      <p></p>
      <p>Submitted by:{props} </p>
      <p>Location:{props} </p>
    </div>
  );
}

export default SingleIssuePage;
