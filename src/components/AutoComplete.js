import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { tatasky_channellist } from "./tatasky_channellist";
import "./AutoComplete";
import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownmenu: [
        {
          channel_name: "",
          channel_number: ""
        }
      ],
      isCallActive: false,
      selectedChannelName: ""
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
    if (!this.state.isCallActive) {
      this.setState({ isCallActive: true });
      axios
        .get(
          "https://channelinfo.pythonanywhere.com/?name=" +
            encodeURIComponent(name),
          {
            cancelToken: source.token
          }
        )
        .then(res => {
          if (res.data.length != 0) {
            this.setState({
              dropdownmenu: this.buildMenu(res.data)
            });
          }
          this.setState({
            isCallActive: false
          });
        })
        .catch(function(thrown) {
          if (axios.isCancel(thrown)) {
            console.log("Request canceled", thrown.message);
          } else {
            // handle error
          }
        });
    }
  };

  componentWillUnmount = () => {
    source.cancel("Operation canceled by the user.");
  };

  componentDidMount = () => {
    this.getChannelData("");
  };

  render() {
    const { classes } = this.props;
    return (
      <Autocomplete
        id="combo-box-demo"
        options={this.state.dropdownmenu}
        value={this.state.selectedChannelName}
        // classes={classes.root}
        getOptionLabel={option => option.channel_name}
        getOptionSelected={(option, value) => {
          console.log("option ", option);
          console.log("channel ", value);
          return option.channel_name === value;
        }}
        onInputChange={event =>
          !this.state.isCallActive
            ? this.getChannelData(event.target.value)
            : {}
        }
        onChange={(event, value) => {
          console.log("onChange event", event);
          console.log("onChange value", value);
          this.setState({
            selectedChannelName: value !== null ? value.channel_name : ""
          });
        }}
        // style={{ width: 300, backgroundColor: "black" }}
        style={{
          width: window.innerWidth * 0.4,
          backgroundColor: "white",
          borderRadius: "5px"
        }}
        renderOption={option => (
          <React.Fragment>
            <p
              style={{
                color: "#000067",
                fontWeight: "bold",
                fontSize: "x-medium",
                padding: "0px"
              }}
            >
              {option.channel_name}
            </p>
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
