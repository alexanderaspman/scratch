import sizes from "./Sizess";

const styles = {
  Intro: {
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    width: "60%",
    margin: "auto",
    "& p": {
      paddingLeft: "2rem",
      lineHeight: "1.4rem",
      width: "100%",
      height: "100%",
      fontSize: "1.2rem",
      backgroundColor: "#F1A38F",
      padding: "12px 0",

      "& span": {
        display: "block",
        fontWeight: 600
      },
      [sizes.down("sm")]: {
        border: 0,
        textAlign: "center",
        lineHeight: "1.4rem",
        width: "60%",
        fontSize: "1.2rem"
      }
    },
    [sizes.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  skillImages: {
    width: "35%",
    margin: "0 0 0 0px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "& img": {
      height: "100px"
    },
    [sizes.down("sm")]: {
      width: "10%",
      padding: "0",
      justifyContent: "space-around",
      "& img": {
        height: "75px"
      }
    }
  },
  skillImages2: {
    width: "35%",
    margin: "0 0px 0 0",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "& img": {
      height: "100px"
    },
    [sizes.down("sm")]: {
      width: "10%",
      padding: "0",
      justifyContent: "space-around",
      "& img": {
        height: "75px"
      }
    }
  }
};

export default styles;
