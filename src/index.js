import React from 'react';
import ReactDOM from 'react-dom';
import ReactHUD from './lib/reactHUD';
import reportWebVitals from './reportWebVitals';

import VideoFrame from './components/videoFrame';
import Avatar from './components/avatar';
import ActiveAnimation from './components/activeAnimation';
import "./assets/main.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactHUD
      hasFullScreen
      topLeft={<Avatar />}
      bottomRight={
        <ActiveAnimation backgroundColour="bg-red-500" />
      }
      displayMiddle={
        <VideoFrame
          width="100%"
          height="100%"
          className="w-full h-full"
          videoPath="https://www.youtube.com/watch?v=ChOhcHD8fBA"
        />
      }
      hudClass="relative flex items-center justify-center h-full w-full max-h-screen bg-black"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
