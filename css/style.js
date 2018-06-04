import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "inherit"
    },
    "*:after": {
        "boxSizing": "inherit"
    },
    "*:before:": {
        "boxSizing": "inherit"
    },
    "html": {
        "boxSizing": "border-box"
    },
    "body": {
        "color": "#111",
        "fontFamily": "'Roboto', sans-serif",
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "a": {
        "textDecoration": "none",
        "color": "#111"
    },
    "a:hover h2": {
        "textDecoration": "underline"
    },
    "h1": {
        "display": "inline-block",
        "fontWeight": "100",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0.5
    },
    "h2": {
        "fontWeight": "400",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header": {
        "background": "#4caf50",
        "color": "#fff",
        "position": "fixed",
        "top": 0,
        "width": "100%",
        "paddingTop": 0.5,
        "paddingRight": 1,
        "paddingBottom": 0.5,
        "paddingLeft": 1
    },
    "icon-list": {
        "fontSize": 1.5,
        "color": "#FFF"
    },
    "slide-menu": {
        "position": "absolute",
        "top": 3.5,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "background": "#4caf50",
        "height": "100%",
        "width": 10,
        "transform": "translate3d(0, 0, 0)",
        "transition": "transform 0.2s"
    },
    "slide-menu ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slide-menu li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slide-menu li a": {
        "color": "#fff",
        "display": "block",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0
    },
    "menu-hidden slide-menu": {
        "transform": "translate3d(-12em, 0, 0)",
        "transition": "transform 0.2s"
    },
    "feed": {
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "entry": {
        "borderBottom": "1px solid #ddd",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    }
});