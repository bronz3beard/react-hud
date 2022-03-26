# React HUD &nbsp; [![npm version](https://badge.fury.io/js/react-hud.svg)](https://badge.fury.io/js/react-hud)

[React Matrix Demo](https://react-matrix.herokuapp.com/)

React HUD will showcase a view (image, video, carousel, whatever you want) on your website, with multiple action points overlaying the display.

----
# PR's
- Have a look at the [PR template doc](https://github.com/bronz3beard/react-matrix/blob/main/docs) for best approach to getting your pr merged.

----
# Usage

```js 
import { ReactHUD } from "react-hud";

const App = () => {
  ...
;
  return (
    <ReactHUD
        topLeft={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        topMiddle={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        topRight={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        centreLeft={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        centreMiddle={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        centreRight={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        bottomLeft={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        bottomMiddle={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        bottomRight={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        displayMiddle={{} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined}
        topLeftClass=""
        topMiddleClass=""
        topRightClass=""
        centreLeftClass=""
        centreMiddleClass=""
        centreRightClass=""
        bottomLeftClass=""
        bottomMiddleClass=""
        bottomRightClass=""
        displayMiddleClass=""
        hudClass=""
        hudContainerClass=""
        hasFullScreen={
        topLeft: boolean,
        topMiddle: boolean,
        topRight: boolean,
        centreLeft: boolean,
        centreMiddle: boolean,
        centreRight: boolean,
        bottomLeft: boolean,
        bottomMiddle: boolean,
        bottomRight: boolean
        }
    />
  )
}
```

----
# PropTypes

```js

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

```

----
# Available Properties


----
# Styling Properties

All styling is controlled by tailwind and you can override any part of the HUD, by adding any of the following props.

```js
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
```

----
# Create React App
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
