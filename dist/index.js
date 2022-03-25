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
  }, hasFullScreen && /*#__PURE__*/_react.default.createElement(_fullScreenButton.default, {
    elementId: "react-hud"
  }), topLeft && /*#__PURE__*/_react.default.createElement("div", {
    id: "topLeft",
    className: topLeftClass
  }, topLeft), topMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "topMiddle",
    className: topMiddleClass
  }, topMiddle), topRight && /*#__PURE__*/_react.default.createElement("div", {
    id: "topRight",
    className: topRightClass
  }, topRight), centreLeft && /*#__PURE__*/_react.default.createElement("div", {
    id: "centreLeft",
    className: centreLeftClass
  }, centreLeft), centreMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "centreMiddle",
    className: centreMiddleClass
  }, centreMiddle), centreRight && /*#__PURE__*/_react.default.createElement("div", {
    id: "centreRight",
    className: centreRightClass
  }, centreRight), bottomLeft && /*#__PURE__*/_react.default.createElement("div", {
    id: "bottomLeft",
    className: bottomLeftClass
  }, bottomLeft), bottomMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "bottomMiddle",
    className: bottomMiddleClass
  }, bottomMiddle), bottomRight && /*#__PURE__*/_react.default.createElement("div", {
    id: "bottomRight",
    className: bottomRightClass
  }, bottomRight), displayMiddle && /*#__PURE__*/_react.default.createElement("div", {
    id: "displayMiddle",
    className: displayMiddleClass
  }, displayMiddle)));
};

ReactHUD.defaultProps = {
  hasFullScreen: true,
  topLeftClass: 'absolute top-0 left-0 z-10',
  topMiddleClass: 'absolute top-0 left-1/2 transform -translate-x-1/2 z-10 lg:m-2',
  topRightClass: 'absolute top-0 right-0 z-10',
  centreLeftClass: 'absolute top-1/2 left-0 -translate-y-1/2 z-10 lg:m-2',
  centreMiddleClass: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 lg:m-2',
  centreRightClass: 'absolute top-1/2 right-0 -translate-y-1/2 z-10 lg:m-2',
  bottomLeftClass: 'absolute lg:bottom-0 bottom-2 left-0 z-10 lg:m-2 my-6 mx-2',
  bottomMiddleClass: 'absolute bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 m-2 lg:w-2/5 w-full my-1 px-2',
  bottomRightClass: 'absolute lg:bottom-0 bottom-2 right-0 z-10 lg: my-6 mx-2',
  displayMiddleClass: 'absolute w-full h-full z-0',
  hudClass: 'relative flex items-center justify-center h-full w-full bg-black m-0 p-0',
  hudContainerClass: 'absolute inset-0 m-0 p-0 h-full max-h-full w-full'
};
ReactHUD.propTypes = {
  topLeft: _propTypes.element,
  topMiddle: _propTypes.element,
  topRight: _propTypes.element,
  centreLeft: _propTypes.element,
  centreMiddle: _propTypes.element,
  centreRight: _propTypes.element,
  bottomLeft: _propTypes.element,
  bottomMiddle: _propTypes.element,
  bottomRight: _propTypes.element,
  displayMiddle: _propTypes.element,
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
  hasFullScreen: _propTypes.bool
};
var _default = ReactHUD;
exports.default = _default;