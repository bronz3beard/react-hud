"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _fullScreenButton = _interopRequireDefault(require("./fullScreenButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactHUD = props => {
  const {
    topLeft,
    topMiddle,
    topRight,
    centreLeft,
    centreMiddle,
    centreRight,
    bottomLeft,
    bottomMiddle,
    bottomRight,
    displayMiddle,
    topLeftClass,
    topMiddleClass,
    topRightClass,
    centreLeftClass,
    centreMiddleClass,
    centreRightClass,
    bottomLeftClass,
    bottomMiddleClass,
    bottomRightClass,
    displayMiddleClass,
    hudClass,
    hudContainerClass,
    hasFullScreen
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: hudContainerClass,
    id: "react-hud"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: hudClass
  }, topLeft && /*#__PURE__*/_react.default.createElement("div", {
    id: "topLeft",
    className: topLeftClass
  }, !hasFullScreen.topLeft ? topLeft : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), topMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "topMiddle",
    className: topMiddleClass
  }, !hasFullScreen.topMiddle ? topMiddle : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), topRight && /*#__PURE__*/_react.default.createElement("div", {
    id: "topRight",
    className: topRightClass
  }, !hasFullScreen.topRight ? topRight : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), centreLeft && /*#__PURE__*/_react.default.createElement("div", {
    id: "centreLeft",
    className: centreLeftClass
  }, !hasFullScreen.centreLeft ? centreLeft : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), centreMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "centreMiddle",
    className: centreMiddleClass
  }, !hasFullScreen.centreMiddle ? centreMiddle : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), centreRight && /*#__PURE__*/_react.default.createElement("div", {
    id: "centreRight",
    className: centreRightClass
  }, !hasFullScreen.centreRight ? centreRight : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), bottomLeft && /*#__PURE__*/_react.default.createElement("div", {
    id: "bottomLeft",
    className: bottomLeftClass
  }, !hasFullScreen.bottomLeft ? bottomLeft : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), bottomMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "bottomMiddle",
    className: bottomMiddleClass
  }, !hasFullScreen.bottomMiddle ? bottomMiddle : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), bottomRight && /*#__PURE__*/_react.default.createElement("div", {
    id: "bottomRight",
    className: bottomRightClass
  }, !hasFullScreen.bottomRight ? bottomRight : /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    nodeId: "react-hud"
  })), displayMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "displayMiddle",
    className: displayMiddleClass
  }, displayMiddle)));
};

ReactHUD.defaultProps = {
  topLeftClass: 'absolute top-0 left-0 z-10',
  topMiddleClass: 'absolute top-0 left-1/2 transform -translate-x-1/2 z-10',
  topRightClass: 'absolute top-0 right-0 z-10',
  centreLeftClass: 'absolute top-1/2 left-0 -translate-y-1/2 z-10',
  centreMiddleClass: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10',
  centreRightClass: 'absolute top-1/2 right-0 -translate-y-1/2 z-10',
  bottomLeftClass: 'absolute bottom-0 left-0 z-10',
  bottomMiddleClass: 'absolute bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 lg:w-2/5 w-full',
  bottomRightClass: 'absolute lg:bottom-0 bottom-2 right-0 z-10',
  displayMiddleClass: 'absolute w-full h-full z-0',
  hudClass: 'relative flex items-center justify-center h-full w-full bg-black m-0 p-0',
  hudContainerClass: 'absolute inset-0 m-0 p-0 h-full max-h-full w-full',
  hasFullScreen: {
    topLeft: false,
    topMiddle: false,
    topRight: false,
    centreLeft: false,
    centreMiddle: false,
    centreRight: false,
    bottomLeft: false,
    bottomMiddle: false,
    bottomRight: false
  }
};
ReactHUD.propTypes = {
  topLeft: _propTypes.node,
  topMiddle: _propTypes.node,
  topRight: _propTypes.node,
  centreLeft: _propTypes.node,
  centreMiddle: _propTypes.node,
  centreRight: _propTypes.node,
  bottomLeft: _propTypes.node,
  bottomMiddle: _propTypes.node,
  bottomRight: _propTypes.node,
  displayMiddle: _propTypes.node,
  topLeftClass: _propTypes.string,
  topMiddleClass: _propTypes.string,
  topRightClass: _propTypes.string,
  centreLeftClass: _propTypes.string,
  centreMiddleClass: _propTypes.string,
  centreRightClass: _propTypes.string,
  bottomLeftClass: _propTypes.string,
  bottomMiddleClass: _propTypes.string,
  bottomRightClass: _propTypes.string,
  displayMiddleClass: _propTypes.string,
  hudClass: _propTypes.string,
  hudContainerClass: _propTypes.string,
  hasFullScreen: (0, _propTypes.shape)({
    topLeft: _propTypes.bool,
    topMiddle: _propTypes.bool,
    topRight: _propTypes.bool,
    centreLeft: _propTypes.bool,
    centreMiddle: _propTypes.bool,
    centreRight: _propTypes.bool,
    bottomLeft: _propTypes.bool,
    bottomMiddle: _propTypes.bool,
    bottomRight: _propTypes.bool
  })
};
var _default = ReactHUD;
exports.default = _default;