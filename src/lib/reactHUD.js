import React from 'react';
import { string, bool, element } from "prop-types";
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
        {hasFullScreen && (
          <FullScreen elementId="react-hud" />
        )}
        {topLeft && (
          <div id="topLeft" className={topLeftClass}>{topLeft}</div>
        )}
        {topMiddle && (
          <div
            id="topMiddle"
            className={topMiddleClass}
          >
            {topMiddle}
          </div>
        )}
        {topRight && (
          <div
            id="topRight"
            className={topRightClass}
          >
            {topRight}
          </div>
        )}
        {centreLeft && (
          <div
            id="centreLeft"
            className={centreLeftClass}
          >
            {centreLeft}
          </div>
        )}
        {centreMiddle && (
          <div
            id="centreMiddle"
            className={centreMiddleClass}
          >
            {centreMiddle}
          </div>
        )}
        {centreRight && (
          <div
            id="centreRight"
            className={centreRightClass}
          >
            {centreRight}
          </div>
        )}
        {bottomLeft && (
          <div
            id="bottomLeft"
            className={bottomLeftClass}
          >
            {bottomLeft}
          </div>
        )}
        {bottomMiddle && (
          <div
            id="bottomMiddle"
            className={bottomMiddleClass}
          >
            {bottomMiddle}
          </div>
        )}
        {bottomRight && (
          <div id="bottomRight" className={bottomRightClass}>
            {bottomRight}
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
  hudContainerClass: 'absolute inset-0 m-0 p-0 h-full max-h-full w-full',
};

ReactHUD.propTypes = {
  topLeft: element,
  topMiddle: element,
  topRight: element,
  centreLeft: element,
  centreMiddle: element,
  centreRight: element,
  bottomLeft: element,
  bottomMiddle: element,
  bottomRight: element,
  displayMiddle: element,
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
  hasFullScreen: bool,
};

export default ReactHUD;

