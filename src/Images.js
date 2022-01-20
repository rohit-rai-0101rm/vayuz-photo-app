import React from "react";

const Images = ({
  download_url,
  className,
  style,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd
}) => {
  return (
    <img
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={className}
      style={style}
      src={download_url}
      alt="photos"
      width="50px"
      height="50px"
    />
  );
};
export default Images;
