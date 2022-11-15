import withHover from "./withHover";

function ImageBox({
  imageUrl,
  imageTitle,
  isHovered,
  handleMouseEnter,
  handleMouseLeave
}) {
  return (
    <div>
      {isHovered && <div id="hover">{imageTitle}</div>}
      <img
        src={imageUrl}
        alt={imageTitle}
        width="400px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <h5>이미지에 마우스를 올리면 이미지 제목이 표시됩니다.</h5>
    </div>
  );
}

export default withHover(ImageBox);