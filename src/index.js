import React from "react";
import PropTypes from "prop-types";

const Cloudinary = ({
  alt,
  transformation,
  image,
  cloudName,
  cname,
  method,
  uploadedFolder,
  relativeUrl
}) => {
  let cloudinaryImageUrl = "";
  if (method === "upload") {
    cloudinaryImageUrl = `https://${cname}/${cloudName}/image/${method}/${transformation}/${uploadedFolder}/${relativeUrl}`;
  } else {
    cloudinaryImageUrl = `https://${cname}/${cloudName}/image/${method}/${transformation}/${image}`;
  }
  return <img src={cloudinaryImageUrl} alt={alt} />;
};

Cloudinary.propTypes = {
  alt: PropTypes.String,
  transformation: PropTypes.String,
  image: PropTypes.String,
  cloudName: PropTypes.String,
  cname: PropTypes.String,
  method: PropTypes.String,
  uploadedFolder: PropTypes.String,
  relativeUrl: PropTypes.String
};

Cloudinary.defaultProps = {
  alt: "image",
  transformation: "",
  image: "",
  cloudName: "",
  cname: "res.cloudinary.com",
  method: "fetch",
  uploadedFolder: "",
  relativeUrl: ""
};

export default Cloudinary;
