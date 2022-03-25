import React from "react";
import PropTypes from "prop-types";

const Avatar = (props) => {
    const { imageUrl, authorName, avatarUrl } = props;

    return (
        <footer className="flex items-center justify-between leading-none p-2">
            {avatarUrl ? (
                <a
                    href={avatarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center no-underline hover:underline text-black"
                >
                    {imageUrl && (
                        <img alt="avatar" src={imageUrl} className="block w-12 h-12 rounded-full" />
                    )}
                    {authorName && <p className="ml-2 text-sm">{authorName}</p>}
                </a>
            ) : (
                <span className="flex items-center text-black">
                    {imageUrl && (
                        <img alt="avatar" src={imageUrl} className="block rounded-full" />
                    )}
                    {authorName && <p className="ml-2 text-sm">{authorName}</p>}
                </span>
            )}
        </footer>
    );
};

Avatar.defaultProps = {
    authorName: "",
    avatarUrl: "#",
    imageUrl: "https://picsum.photos/32/32/?random",
};

Avatar.propTypes = {
    imageUrl: PropTypes.string,
    authorName: PropTypes.string,
    avatarUrl: PropTypes.string,
};

export default Avatar;