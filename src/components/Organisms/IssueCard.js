//Also taking props from Dashboard Grid component BUT it is rendering on the Dahsboard Page
//ex using the passed props: <p>Issues: {props.whatever}</p>

//material ui

//this will have a Link component that leads to the single page component But the ROUTE will be established on the Dashboard component

import React from "react";

const IssueCard = props => {
  console.log(props);

  return (
    <div className="props">
      <h1>{props.user_id} </h1>
      <h2>{props.title} </h2>
      <p> {props.completed}</p>
      <p>{props.description}</p>
      <p>{props.equipment}</p>
      <p>{props.estimated_cost}</p>
      <p> {props.general_issues}</p>
      <p>{props.issues_id}</p>
      <p>{props.needs_attention}</p>
      <p>{props.priority}</p>
      <p>{props.scheduled}</p>
    </div>
  );
};

export default IssueCard;
