import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Work from "./Work";
export default props => {
  const path = props.location.pathname;
  console.log(path);
  return (
    <div>
      <h2>Take a look at this beautiful portfolio</h2>
      <div>
        <p>Beautiful pages I made</p>
        <ul>
          <li>
            <Link to={path + "/1"}>My perfect portfolio site</Link>
          </li>
          <li>
            <Link to={path + "/2"}>
              Some crappy website to fill out my portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
