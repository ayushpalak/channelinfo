import React, { Component } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { tatasky_channellist } from "./test";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.dropdownmenu = tatasky_channellist.reduce((accum, channel) => {
      const dropdownObj = {};
      dropdownObj["channel_name"] = Object.keys(channel)[0];
      dropdownObj["channel_number"] = channel[Object.keys(channel)[0]];
      accum.push(dropdownObj);
      return accum;
    }, []);
  }

  render() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={this.dropdownmenu}
        getOptionLabel={option =>
          option.channel_name + " " + option.channel_number
        }
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Channel name" variant="outlined" />
        )}
      />
    );
  }
}

export default AutoComplete;
