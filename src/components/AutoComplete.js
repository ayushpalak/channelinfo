import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { tatasky_channellist } from "./tatasky_channellist";
import ChannelList from "./ChannelList";
import "./AutoComplete";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();

    this.state = {
      dropdownmenu: [
        {
          channel_name: "",
          channel_number: ""
        }
      ],
      isCallActive: false,
      channelSelected: ""
    };
  }

  buildMenu = arrOfObj => {
    if (arrOfObj.length == 0) {
      return [
        {
          channel_name: "",
          channel_number: ""
        }
      ];
    }
    let dropdownmenu = arrOfObj.reduce((accum, channel) => {
      const dropdownObj = {};
      dropdownObj["channel_name"] = Object.keys(channel)[0];
      dropdownObj["channel_numbers_arr_of_Obj"] =
        channel[Object.keys(channel)[0]];
      accum.push(dropdownObj);
      return accum;
    }, []);
    return dropdownmenu;
  };
  getChannelData = name => {
    axios
      .get("https://channelinfo.pythonanywhere.com/", {
        cancelToken: source.token
      })
      .then(res => {
        if (res.data.length != 0) {
          this.setState({
            dropdownmenu: this.buildMenu(res.data)
          });
        }
      })
      .catch(function(thrown) {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        } else {
          // handle error
        }
      });
  };

  componentWillUnmount = () => {
    source.cancel("Operation canceled by the user.");
  };

  componentDidMount = () => {
    this.getChannelData("");
    console.log("width ", this.myInput.current.offsetWidth);
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Autocomplete
          ref={this.myInput}
          id="combo-box-demo"
          options={this.state.dropdownmenu}
          style={{
            // width: window.innerWidth * 0.4,
            minWidth: 300,
            backgroundColor: "white",
            borderRadius: "5px"
          }}
          getOptionLabel={option => {
            return option.channel_name;
          }}
          onChange={(event, value) => {
            if (value) {
              let searchIndex = this.state.dropdownmenu.findIndex(val => {
                return val != null
                  ? val.channel_name === value.channel_name
                  : false;
              });
              this.setState({
                channelObj: this.state.dropdownmenu[searchIndex]
              });
            }
          }}
          renderOption={option => (
            <React.Fragment>
              <div>
                <p
                  style={{
                    color: "#000067",
                    fontWeight: "bold",
                    fontSize: "x-medium",
                    padding: "0px",
                    textTransform: "capitalize"
                  }}
                >
                  {option.channel_name}
                </p>
              </div>
            </React.Fragment>
          )}
          renderInput={params => (
            <CssTextField
              {...params}
              label=""
              variant="outlined"
              autoFocus={true}
              placeholder="Enter Channel Name"
            />
          )}
        />
        <h2
          style={{
            color: "#AAAAAA",
            textAlign: "center",
            width: "100%",
            paddingTop: "40px"
            // paddingBottom: "40px",
            // paddingLeft: "calc(50% - 300px)",
            // paddingRight: "calc(50% - 300px)",
            // margin: "0"
          }}
        >
          Find your favourite channel number on any setup box.{" "}
        </h2>

        {this.state.channelObj ? (
          <div
            style={{
              width: "100%",
              paddingTop: "40px"
              // paddingBottom: "40px",
              // paddingLeft: "calc(50% - 300px)",
              // paddingRight: "calc(50% - 300px)",
              // margin: "0"
            }}
          >
            <ChannelList
              airtel={this.state.channelObj.channel_numbers_arr_of_Obj.airtel}
              videocon={this.state.channelObj.channel_numbers_arr_of_Obj.d2h}
              dishtv={
                this.state.channelObj.channel_numbers_arr_of_Obj["dish tv"]
              }
              suntv={this.state.channelObj.channel_numbers_arr_of_Obj["sun tv"]}
              tatasky={
                this.state.channelObj.channel_numbers_arr_of_Obj["tata sky"]
              }
            />
          </div>
        ) : null}
      </>
    );
  }
}
AutoComplete.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    borderColor: "white"
    // width: 300,
    // backgroundColor: "white"
  },
  input: {
    borderColor: "white"
  },
  hasPopupIcon: {
    color: "red",
    backgroundColor: "red"
  }
};

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-input": {
      color: "#000067",
      fontWeight: "bold",
      fontSize: "x-large"
      // backgroundColor: "black"
    },
    // "& label": {
    //   color: "white"
    // },
    // "& label.Mui-focused": {
    //   color: "white"
    // },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
        // backgroundColor: "black"
        // color: "red"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

export default withStyles(styles)(AutoComplete);
