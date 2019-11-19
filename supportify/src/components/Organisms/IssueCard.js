//Also taking props from Dashboard Grid component BUT it is rendering on the Dahsboard Page
//ex using the passed props: <p>Issues: {props.whatever}</p>

//material ui

//this will have a Link component that leads to the single page component But the ROUTE will be established on the Dashboard component

import React, { useState, useEffect } from "react";

const IssueCard = props => {
  console.log(props);
  return (
    <div className="Card">
      {props.member.map((data, index) => {
        return (
          <div className="data" key={index}>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IssueCard;
