import React, { useState } from "react";
import styles from './ButtonSelectSettings.module.css';

function ButtonSelectSettings(props) {

    const [color, setColor] = useState("#F7EDE1");

    function handleColorChange(event) {
      
        if (event.target.checked) {
        setColor("#FFCB92");
       
        } else {
        setColor("#F7EDE1");  
        }
    }    
    
  return <>
  
  <label 
    onChange={handleColorChange} 
    className={styles[props.custom]} 
    style={{backgroundColor: color}}>
    {" "}
    {props.labelname}
        <input
          onChange={props.change}
          className={styles.Checkbox}
          type="checkbox"
          name={props.name}
        />
  </label>
  </>;
}

export default ButtonSelectSettings;
