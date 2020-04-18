import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SearchView from "./SearchView";

const BUTTON_NAMES = {
  AIRTEL: "Airtel",
  VIDEOCON: "Videocon D2H",
  TATASKY: "Tata Sky"
};
const SELECTED_COMPONENT = {
  BUTTON_VIEW: "button_view",
  SEARCH_VIEW: "search_view"
};

class SelectChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: SELECTED_COMPONENT.BUTTON_VIEW
    };
  }

  handleClick = selectedComponent => {
    this.setState({ selectedComponent: SELECTED_COMPONENT.SEARCH_VIEW });
    this.props.showBackbtn(true);
    //   switch (name) {
    //   case BUTTON_NAMES.AIRTEL:
    //         break;
    //   case BUTTON_NAMES.TATASKY:
    //     break;
    //   case BUTTON_NAMES.VIDEOCON:
    //     break;
    // }
  };

  renderSearch = name => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh", marginTop: -window.innerHeight * 0.1 }}
      >
        <SearchView selectedProvider={name} />{" "}
      </Grid>
    );
  };

  renderButton = () => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.handleClick(BUTTON_NAMES.AIRTEL)}
        >
          {BUTTON_NAMES.AIRTEL}
        </Button>
        <br />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.handleClick(BUTTON_NAMES.VIDEOCON)}
        >
          {BUTTON_NAMES.VIDEOCON}
        </Button>
        <br />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.handleClick(BUTTON_NAMES.TATASKY)}
        >
          {BUTTON_NAMES.TATASKY}
        </Button>
      </Grid>
    );
  };

  render() {
    switch (this.state.selectedComponent) {
      case SELECTED_COMPONENT.BUTTON_VIEW:
        return this.renderButton();
      case SELECTED_COMPONENT.SEARCH_VIEW:
        return this.renderSearch();
    }
  }
}

export default SelectChannel;
