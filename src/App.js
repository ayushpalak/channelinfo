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
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          backgroundImage: "linear-gradient(#000067,#000000)"
        }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <div
              style={{
                // backgroundColor: "black",
                height: window.innerHeight * 0.1,
                width: window.innerWidth
              }}
            >
              <Icon
                style={{
                  color: "white",
                  marginTop: window.innerHeight * 0.04,
                  marginLeft: window.innerWidth * 0.05
                }}
                onClick={() => alert("hi")}
              >
                home
              </Icon>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            // backgroundColor: "black",
            width: "100%",
            height: window.innerHeight * 0.9
          }}
        >
          <Home />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
