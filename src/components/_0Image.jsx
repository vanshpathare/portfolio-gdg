import userImage from "../images/VANSH.jpg";

const _0Image = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${userImage})`,
        height: "550px",
        width: "500px",
        flexShrink: 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "50% / 65%",
        border: "1px solid #7D725C",
        outline: "1px solid #7D725C",
        outlineOffset: "3px",
        boxShadow: "none",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    ></div>
  );
};

export default _0Image;
