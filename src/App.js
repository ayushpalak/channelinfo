import React, { useState } from "react";
import "./App.css";
import Home from "./views/Home";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

function App() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          backgroundImage: "linear-gradient(#000067,#000000)",
          overflow: "auto",
          height: "100vh",
        }}
      >
        {/* <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Icon
              style={{
                color: "white",
                marginTop: window.innerHeight * 0.04,
                marginLeft: window.innerWidth * 0.05,
                // float: "left"
              }}
            >
              home
            </Icon>{" "}
          </Grid>
        </Grid> */}
        <Grid
          item
          style={{
            // backgroundColor: "black",
            width: "100%"
          }}
        >
          <Home />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
