//Also taking props from Dashboard Grid component BUT it is rendering on the Dahsboard Page
//ex using the passed props: <p>Issues: {props.whatever}</p>

//material ui

//this will have a Link component that leads to the single page component But the ROUTE will be established on the Dashboard component

import React from "react";

const IssueCard = props => {
  console.log(props);

  return (
    <div className="props">
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.role}</p>
    </div>
  );
};

export default IssueCard;
