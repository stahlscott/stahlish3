import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Avatar = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '20px', width: '80px' };
  if (!imageInfo) return null;
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />;
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === 'string') return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

Avatar.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }).isRequired,
};

export default Avatar;
