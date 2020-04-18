import React, { useState } from "react";
import "./App.css";
import SelectChannel from "./views/SelectChannel";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

function App() {
  const [showBackBtn, setBackBtn] = useState(false);
  function handleBackbtn(showBtn) {
    setBackBtn(showBtn);
  }

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          item
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <div
              style={{
                backgroundColor: "black",
                height: window.innerHeight * 0.1,
                width: window.innerWidth
              }}
            >
              {showBackBtn ? (
                <Icon
                  style={{
                    color: "white",
                    marginTop: window.innerHeight * 0.04,
                    marginLeft: "10px"
                  }}
                  onClick={() => alert("hi")}
                >
                  keyboard_backspace
                </Icon>
              ) : null}
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <SelectChannel showBackbtn={handleBackbtn} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
