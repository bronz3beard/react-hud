"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FullScreen = props => {
  const [showFullScreen, setShowFullScreen] = (0, _react.useState)(false);
  const {
    elementId
  } = props;

  const handleFullScreen = () => {
    setShowFullScreen(!showFullScreen);
  };

  (0, _react.useEffect)(() => {
    document.addEventListener("fullscreenchange", handleFullScreen, false);
    return () => document.removeEventListener("fullscreenchange", handleFullScreen, false);
  });
  const requestFullScreen = (0, _react.useCallback)(() => {
    const el = document; // Supports most browsers and their versions.

    const requestMethod = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen; // not a react approach but in this case it is okay for accessing these methods.

    const element = document.getElementById(elementId);

    if (element) {
      if (!showFullScreen) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
    }

    if (showFullScreen) {
      if (el.exitFullscreen) {
        el.exitFullscreen();
      } else if (el.msExitFullscreen) {
        el.msExitFullscreen();
      } else if (el.mozCancelFullScreen) {
        el.mozCancelFullScreen();
      } else if (el.webkitExitFullscreen) {
        el.webkitExitFullscreen();
      }
    }

    if (requestMethod) {
      requestMethod.call(element);
    }
  }, [showFullScreen]);
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "fullscreen",
    onClick: requestFullScreen,
    className: "block m-4 w-8 h-8 z-10 rounded items-center font-medium overflow-hidden bg-transparent hover:bg-gray-300 active:bg-gray-300 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-10 h-9 hover:bg-transparent overflow-hidden rounded"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    color: "#000000",
    size: !showFullScreen ? "1x" : "lg",
    icon: !showFullScreen ? _freeSolidSvgIcons.faExpand : _freeSolidSvgIcons.faCompressAlt
  })));
};

FullScreen.defaultProps = {
  elementId: ""
};
FullScreen.propTypes = {
  elementId: _propTypes.string
};
var _default = FullScreen;
exports.default = _default;