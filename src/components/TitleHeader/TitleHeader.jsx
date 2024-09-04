import "./TitleHeader.css";

const TitleHeader = ({ title, icon }) => {
  return (
    <div className="title-header">
      <h2 className="title-header-title">{title}</h2>
      <div className="title-header-icon-container">
        <span className="title-header-line"></span>
        {/* <img src={icon} alt="icon" className="title-header-icon" /> */}
        {icon}
        <span className="title-header-line"></span>
      </div>
    </div>
  );
};

export default TitleHeader;
