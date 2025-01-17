import PropTypes from "prop-types";
import styles from "../styles/component.module.css"

const Input0 = ({ className, ...rest }) => {
  return (
    <input className={`${styles.input0} ${className}`} {...rest} />
  );
};

export { Input0 };

Input0.propTypes = {
  className: PropTypes.string,
};
