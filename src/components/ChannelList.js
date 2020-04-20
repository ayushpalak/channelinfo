import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function ChannelList(props) {
  return (
    <List
      component="nav"
      aria-label="secondary mailbox folders"
      style={{
        color: "white",
        border: "2px solid white",
        borderRadius: "2px",
        marginLeft: "4%",
        marginRight: "4%",
        marginBottom: "4%",
        overflow: "auto",

      }}
    >
      <ListItem button>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white"
                  // float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "x-large"
                  }}
                >
                  tata sky
                </div>
              </Typography>
            </React.Fragment>
          }
        ></ListItemText>
        <ListItemText
          // primary={props.tatasky}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white",
                  float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "x-large",
                    display: "inline"
                  }}
                >
                  ch.
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "-webkit-xxx-large",
                    display: "inline"
                  }}
                >
                  {" "}
                  {props.tatasky}
                </div>
              </Typography>
            </React.Fragment>
          }
        ></ListItemText>
      </ListItem>
      <Divider
        style={{
          backgroundColor: "white",
          marginLeft: "2%",
          marginRight: "2%"
        }}
      />
      <ListItem button>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white"
                  // float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "x-large"
                  }}
                >
                  Airtel
                </div>
              </Typography>
            </React.Fragment>
          }
          style={{ textTransform: "capitalize", fontSize: "xx-large" }}
        ></ListItemText>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white",
                  float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "x-large",
                    display: "inline"
                  }}
                >
                  ch.
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "-webkit-xxx-large",
                    display: "inline"
                  }}
                >
                  {" "}
                  {props.airtel}
                </div>
              </Typography>
            </React.Fragment>
          }
        ></ListItemText>
      </ListItem>
      <Divider
        style={{
          backgroundColor: "white",
          marginLeft: "2%",
          marginRight: "2%"
        }}
      />
      <ListItem button>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white"
                  // float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "x-large"
                  }}
                >
                  Videocon D2h
                </div>
              </Typography>
            </React.Fragment>
          }
          style={{ textTransform: "capitalize", fontSize: "xx-large" }}
        >
          Videocon d2h
        </ListItemText>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white",
                  float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "x-large",
                    display: "inline"
                  }}
                >
                  ch.
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "-webkit-xxx-large",
                    display: "inline"
                  }}
                >
                  {" "}
                  {props.videocon}
                </div>
              </Typography>
            </React.Fragment>
          }
        ></ListItemText>
      </ListItem>
      <Divider
        style={{
          backgroundColor: "white",
          marginLeft: "2%",
          marginRight: "2%"
        }}
      />
      <ListItem button>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white"
                  // float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "x-large"
                  }}
                >
                  Dish tv
                </div>
              </Typography>
            </React.Fragment>
          }
          style={{ textTransform: "capitalize", fontSize: "xx-large" }}
        >
          Dish Tv
        </ListItemText>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white",
                  float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "x-large",
                    display: "inline"
                  }}
                >
                  ch.
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "-webkit-xxx-large",
                    display: "inline"
                  }}
                >
                  {" "}
                  {props.dishtv}
                </div>
              </Typography>
            </React.Fragment>
          }
        ></ListItemText>
      </ListItem>
      <Divider
        style={{
          backgroundColor: "white",
          marginLeft: "2%",
          marginRight: "2%"
        }}
      />
      <ListItem button>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white"
                  // float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "x-large"
                  }}
                >
                  Sun Tv
                </div>
              </Typography>
            </React.Fragment>
          }
          style={{
            textTransform: "capitalize",
            fontSize: "xx-large !important"
          }}
        >
          Sun Tv
        </ListItemText>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{
                  color: "white",
                  float: "right"
                }}
                color="textPrimary"
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "x-large",
                    display: "inline"
                  }}
                >
                  ch.
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "-webkit-xxx-large",
                    display: "inline"
                  }}
                >
                  {" "}
                  {props.suntv}
                </div>
              </Typography>
            </React.Fragment>
          }
        ></ListItemText>
      </ListItem>
    </List>
  );
}
