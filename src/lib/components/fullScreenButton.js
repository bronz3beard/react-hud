import React, { useState, useEffect, useCallback } from "react";
import { string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpand } from "@fortawesome/free-solid-svg-icons";

const FullScreen = (props) => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    const { elementId } = props;

    const handleFullScreen = () => {
        setShowFullScreen(!showFullScreen);
    };

    useEffect(() => {
        document.addEventListener("fullscreenchange", handleFullScreen, false);

        return () =>
        document.removeEventListener("fullscreenchange", handleFullScreen, false);
    });

    const requestFullScreen = useCallback(() => {
        const el = document;

        // Supports most browsers and their versions.
        const requestMethod =
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen;

        // not a react approach but in this case it is okay for accessing these methods.
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
    }, [elementId, showFullScreen]);

    return (
            <button
                type="button"
                id="fullscreen"
                onClick={requestFullScreen}
                className="block m-4 w-8 h-8 z-10 rounded items-center font-medium overflow-hidden bg-transparent hover:bg-gray-300 active:bg-gray-300 cursor-pointer"
            >
                <span className="w-10 h-9 hover:bg-transparent overflow-hidden rounded">
                    <FontAwesomeIcon
                        color="#000000"
                        size={!showFullScreen ? "1x" : "lg"}
                        icon={!showFullScreen ? faExpand : faCompressAlt}
                    />
                </span>
            </button>
    );
};

FullScreen.defaultProps = {
    elementId: "",
};

FullScreen.propTypes = {
    elementId: string,
};

export default FullScreen;