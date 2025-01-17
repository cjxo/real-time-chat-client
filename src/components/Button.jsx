import PropTypes from "prop-types";
import styles from "../styles/component.module.css";

const Button0 = ({ children, className, ...rest }) => {
  return <button className={`${styles.button0} ${className}`} {...rest}>{children}</button>
};

export { Button0 };

Button0.propTypes = {
  className: PropTypes.string,
};
