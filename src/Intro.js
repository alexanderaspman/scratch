import React from "react";
import { withStyles } from "@material-ui/styles";
//styles
import styles from "./styles/IntroStyles";
import shop from './img/shopping-cart.svg'

function Intro(props) {
  const { classes } = props;
  return (
    <div className={classes.Intro}>
      <p>
        <span>My name is Dave Hillman and I am a web developer.</span> 
      </p>
      <div className={classes.skillImages}>
        <img src={shop} alt="HTML5 LOGO" className="webshopCard" />
        <img src="/images/icons/css.svg" alt="HTML5 LOGO"  className="appCard"/>
    
       <img src="/images/icons/js.png" alt="Javascript Logo" />
</div>
    </div>
  );
}
export default withStyles(styles)(Intro);
