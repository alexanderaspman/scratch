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
        <img src={shop} alt="HTML5 LOGO" ale="Javascript LOGO" className="javascript" />
        <img src="/images/icons/css.svg" alt="HTML5 LOGO"  className="html5"/>
    
       <img src="/images/icons/js.png" alt="React Logo" className="react" />
</div>
    </div>
  );
}
export default withStyles(styles)(Intro);
