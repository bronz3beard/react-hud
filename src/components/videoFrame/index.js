import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const VideoFrame = (props) => {
    const { videoPath, width, height, className } = props;
    const [videoUrl, setVideoUrl] = useState("");
  // const isMp4 = videoPath !== undefined && videoPath.indexOf('.mp4') > -1;
  // const isWebM = videoPath !== undefined && videoPath.indexOf('.webm') > -1;

    const getYouTubeIframeLink = useCallback(() => {
        const isYouTube =
        videoPath !== undefined &&
        videoPath.indexOf(".youtube") > -1 &&
        videoPath;

        if (isYouTube) {
            const youTubeArr = isYouTube.split("/watch?v=");
            setVideoUrl(`${youTubeArr[0]}/embed/${youTubeArr[1]}`);
        }
    }, [videoPath]);

    const getVimeoIframeLink = useCallback(() => {
        const isVimeo =
        videoPath !== undefined && videoPath.indexOf("//vimeo") > -1 && videoPath;

        if (isVimeo) {
            if (isVimeo.indexOf("player.vimeo.com/video/") === -1) {
                const vimeoArr = isVimeo.split("vimeo.com/");
                setVideoUrl(`${vimeoArr[0]}player.vimeo.com/video/${vimeoArr[1]}`);
            }
        }
    }, [videoPath]);

    useEffect(() => {
        getYouTubeIframeLink();
        getVimeoIframeLink();
    }, [videoPath, getYouTubeIframeLink, getVimeoIframeLink]);

    return (
        <div className={className}>
            {videoUrl && (
                <iframe
                    title="video"
                    width={width}
                    scrolling="no"
                    src={videoUrl}
                    allowFullScreen
                    frameBorder="0"
                    height={height}
                    type="text/html"
                    id="video-react-player"
                />
            )}
        </div>
    );
};

VideoFrame.defaultProps = {
    videoPath: "",
    width: "",
    height: "",
    className: "",
};

VideoFrame.propTypes = {
    videoPath: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default VideoFrame;