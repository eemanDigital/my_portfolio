import PropTypes from "prop-types";
import "./button.css";

const Button = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
