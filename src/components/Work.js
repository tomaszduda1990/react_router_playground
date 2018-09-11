import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div>
    <h4>My super duper work number {props.match.params.id}</h4>
    <p>Just leave like :) </p>
    <Link to="/portfolio">Go Back to sites</Link>
  </div>
);
