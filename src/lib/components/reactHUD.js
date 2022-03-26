import React from 'react';
import { string, bool, node, shape } from "prop-types";
import FullScreen from './fullScreenButton';

const ReactHUD = (props) => {
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

  return (
    <div className={hudContainerClass} id="react-hud">
      <div className={hudClass}>
        {topLeft && (
          <div id="topLeft" className={topLeftClass}>
            {!hasFullScreen.topLeft ? topLeft : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {topMiddle && (
          <div
            id="topMiddle"
            className={topMiddleClass}
          >
            {!hasFullScreen.topMiddle ? topMiddle : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {topRight && (
          <div
            id="topRight"
            className={topRightClass}
          >
            {!hasFullScreen.topRight ? topRight : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {centreLeft && (
          <div
            id="centreLeft"
            className={centreLeftClass}
          >
            {!hasFullScreen.centreLeft ? centreLeft : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {centreMiddle && (
          <div
            id="centreMiddle"
            className={centreMiddleClass}
          >
            {!hasFullScreen.centreMiddle ? centreMiddle : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {centreRight && (
          <div
            id="centreRight"
            className={centreRightClass}
          >
            {!hasFullScreen.centreRight ? centreRight : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {bottomLeft && (
          <div
            id="bottomLeft"
            className={bottomLeftClass}
          >
            {!hasFullScreen.bottomLeft ? bottomLeft : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {bottomMiddle && (
          <div
            id="bottomMiddle"
            className={bottomMiddleClass}
          >
            {!hasFullScreen.bottomMiddle ? bottomMiddle : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {bottomRight && (
          <div id="bottomRight" className={bottomRightClass}>
            {!hasFullScreen.bottomRight ? bottomRight : (<FullScreen nodeId="react-hud" />)}
          </div>
        )}
        {displayMiddle && (
          <div id="displayMiddle" className={displayMiddleClass}>{displayMiddle}</div>
        )}
      </div>
    </div>
  );
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
  },
};

ReactHUD.propTypes = {
  topLeft: node,
  topMiddle: node,
  topRight: node,
  centreLeft: node,
  centreMiddle: node,
  centreRight: node,
  bottomLeft: node,
  bottomMiddle: node,
  bottomRight: node,
  displayMiddle: node,
  topLeftClass: string,
  topMiddleClass: string,
  topRightClass: string,
  centreLeftClass: string,
  centreMiddleClass: string,
  centreRightClass: string,
  bottomLeftClass: string,
  bottomMiddleClass: string,
  bottomRightClass: string,
  displayMiddleClass: string,
  hudClass: string,
  hudContainerClass: string,
  hasFullScreen: shape({
    topLeft: bool,
    topMiddle: bool,
    topRight: bool,
    centreLeft: bool,
    centreMiddle: bool,
    centreRight: bool,
    bottomLeft: bool,
    bottomMiddle: bool,
    bottomRight: bool
  }),
};

export default ReactHUD;

