import React, { useState } from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import VideoFrame from './components/videoFrame';
import Avatar from './components/avatar';
import IconsRow from "./components/iconsRow";
import { ReactHUD } from "./lib";

const App = () => {
  const [dimensions, setDimensions] = useState('h-full w-full')
  const [dimensionSelected, setDimensionSelected] = useState('');

  const handleDimensionClick = (event) => {
    event.preventDefault();
    const { id, name } = event.target;

    setDimensions(id);
    setDimensionSelected(name);
  };

  return (
    <ReactHUD
      hasFullScreen={{ topRight: false }}
      topLeft={<IconsRow />}
      topMiddle={<h1 className="w-96 h-14 text-center text-white text-3xl select-none">React HUD</h1>}
      topRight={(
        <div className="flex flex-col items-start py-2 px-4 w-52 h-16 bg-white rounded-bl-xl select-none">
          <h3>
            <FontAwesomeIcon size="sm" color="#000000" icon={faThumbsUp} /> 88k
          </h3>
          <h3 className="text-xs">
            10,986,408 views 1 Aug 2015
          </h3>
        </div>
      )}
      centreRight={(
        <div className="flex flex-col space-y-4 w-16 h-44 text-white rounded-tl-xl rounded-bl-xl px-2.5 backdrop-blur-lg bg-white/20 drop-shadow-2xl select-none">
          <h3 className="pb-3 uppercase">Share</h3>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/TimestormFilms"
            className="mx-auto drop-shadow-2xl"
          >
            <FontAwesomeIcon size="2x" color="#ffffff" icon={faFacebook} />
          </a>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/martin_heck/"
            className="mx-auto drop-shadow-2xl"
          >
            <FontAwesomeIcon size="2x" color="#ffffff" icon={faInstagram} />
          </a>
        </div>
      )}
      bottomLeft={(
        <div className="flex flex-col items-start py-1 px-4 w-44 h-8 backdrop-blur-lg bg-white/20 rounded-tr-xl drop-shadow-xl uppercase select-none">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://timestormfilms.net/"
            className="text-white"
          >
            Timestorm Films
          </a>
        </div>
      )}
      bottomMiddle={
        <div className="flex flex-row space-x-4 py-2 items-center justify-center px-4 w-full h-10 backdrop-blur-lg bg-white/20 rounded-tr-xl rounded-tl-xl drop-shadow-xl uppercase select-none">
          <h3 className="select-none text-white text-bold text-xs py-0.5">W/H:</h3>
          <button
            type="button"
            name="50/50"
            onClick={handleDimensionClick}
            id="absolute w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            className={`text-white text-xs ${dimensionSelected.includes('50/50') ? 'text-green-200' : ''}`}
          >
            50/50
          </button>
          <button
            type="button"
            name="75/50"
            onClick={handleDimensionClick}
            id="absolute w-9/12 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            className={`text-white text-xs ${dimensionSelected.includes('75/50') ? 'text-green-200' : ''}`}
          >
            75/50
          </button>
          <button
            type="button"
            name="75/75"
            onClick={handleDimensionClick}
            id="absolute w-9/12 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            className={`text-white text-xs ${dimensionSelected.includes('75/75') ? 'text-green-200' : ''}`}
          >
            75/75
          </button>
          <button
            type="button"
            name="100/75"
            onClick={handleDimensionClick}
            id="absolute w-full h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            className={`text-white text-xs ${dimensionSelected.includes('100/75') ? 'text-green-200' : ''}`}
          >
            100/75
          </button>
          <button
            type="button"
            name="100/100"
            onClick={handleDimensionClick}
            id="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            className={`text-white text-xs ${dimensionSelected.includes('100/100') ? 'text-green-200' : ''}`}
          >
            100/100
          </button>
        </div>
      }
      bottomRight={(
        <div className="pb-2">
          <Avatar avatarUrl="mailto:martin@timestormfilms.net" />
        </div>
      )}
      displayMiddle={
        <VideoFrame
          width="100%"
          height="100%"
          className="w-full h-full iframeContainer"
          videoPath="https://www.youtube-nocookie.com/watch?v=ChOhcHD8fBA?controls=0&showinfo=0&autohide=1&wmode=transparent&modestbranding=1&fs=0&rel=0&list=PLdRRZ1KS1gL_WqwxSoPfS7eu0MOr4mBfI"
        />
      }
      hudClass={`${dimensions} relative flex items-center justify-center max-h-screen bg-black`}
    />
  );
  }
export default App;
