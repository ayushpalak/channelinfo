import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

class ChannelList extends Component {
  render() {
    return (
      <List
        component="nav"
        aria-label="secondary mailbox folders"
        style={{
          color: "white",
          border: "2px solid white",
          borderRadius: "2px",
          width: window.innerWidth * 0.4
        }}
      >
        <ListItem button>
          <ListItemText primary="Tata sky"></ListItemText>
          <ListItemText
            primary={this.props.tatasky}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  style={{ display: "inline" }}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          ></ListItemText>
        </ListItem>
        <Divider
          style={{
            backgroundColor: "white"
            // border: "2px solid white"
          }}
        />
        <ListItem button>
          <ListItemText primary="Airtel"></ListItemText>
          <ListItemText primary={this.props.airtel}></ListItemText>
        </ListItem>
        <Divider
          style={{
            backgroundColor: "white"
            // border: "2px solid white"
          }}
        />
        <ListItem button>
          <ListItemText primary="Videocon d2h">Videocon d2h</ListItemText>
          <ListItemText primary={this.props.videocon}></ListItemText>
        </ListItem>
        <Divider
          style={{
            backgroundColor: "white"
            // border: "2px solid white"
          }}
        />
        <ListItem button>
          <ListItemText primary="Dish Tv">Dish Tv</ListItemText>
          <ListItemText primary={this.props.dishtv}></ListItemText>
        </ListItem>
        <Divider
          style={{
            backgroundColor: "white"
            // border: "2px solid white"
          }}
        />
        <ListItem button>
          <ListItemText primary="Sun Tv">Sun Tv</ListItemText>
          <ListItemText primary={this.props.suntv}></ListItemText>
        </ListItem>
      </List>
    );
  }
}

export default ChannelList;
