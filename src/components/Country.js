import React, { useRef, useEffect } from "react";
import classes from "./Country.module.css";


const Country = (props) => {
 

  return (
    <>
      <div className={classes.div}>
        <li className={classes.element}>
          <h2>
            {props.name}({props.phone})
          </h2>
          <a target="_blank" href={props.link} className={classes.link}>
            CLICK HERE TO VIEW FLAG
          </a>
          <br />
          
        </li>
      </div>
    </>
  );
};

export default Country;
