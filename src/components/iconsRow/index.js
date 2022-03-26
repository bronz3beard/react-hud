import React from "react";
import { faGitSquare, faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsRow = () => {
    return (
        <div className="w-52 h-16 flex space-x-10 justify-center items-center bg-white rounded-br-xl">
            <a
                // target="_blank"
                // rel="noopener noreferrer"
                href="#"
            >
                <FontAwesomeIcon size="2x" color="#77B244" icon={faGitSquare} />
            </a>
            <a
                // target="_blank"
                // rel="noopener noreferrer"
                href="#"
            >
                <FontAwesomeIcon size="2x" color="#77B244" icon={faNpm} />
            </a>
        </div>
    );
};

export default IconsRow;