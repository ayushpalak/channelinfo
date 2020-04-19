import React, { Component } from "react";
import AutoComplete from "../components/AutoComplete";
import { Grid } from "@material-ui/core";
import AutoCompleteAsync from "../components/AutoCompleteAsync";

const BUTTON_NAMES = {
  AIRTEL: "Airtel",
  VIDEOCON: "Videocon D2H",
  TATASKY: "Tata Sky"
};
const SELECTED_COMPONENT = {
  BUTTON_VIEW: "button_view",
  SEARCH_VIEW: "search_view"
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: SELECTED_COMPONENT.BUTTON_VIEW
    };
  }

  render() {
    return (
      <>
        {/* <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          // style={{ minHeight: "100vh", marginTop: -window.innerHeight * 0.2 }}
          // style={{ marginTop: window.innerHeight * 0.2 }}
        > */}
        <Grid container direction="column" justify="center" alignItems="center">
          <h2 style={{ color: "white" }}> Find your channel </h2>
          <AutoCompleteAsync />
          {/* <AutoComplete></AutoComplete> */}
          <h2 style={{ color: "#AAAAAA" }}>
            {" "}
            Find your favourite channel number on any setup box.{" "}
          </h2>
        </Grid>
      </>
    );
  }
}

export default Home;
