import PropTypes from "prop-types";
import styles from "../styles/component.module.css"

const Input0 = ({ className, ...rest }) => {
  return (
    <input className={`${styles.input0} ${className}`} {...rest} />
  );
};

const TextArea0 = ({ children, className, ...rest }) => {
  return (
    <textarea className={`${styles.input0} ${className}`} {...rest}>{children}</textarea>
  );
};

export { Input0, TextArea0 };

Input0.propTypes = TextArea0.propTypes = {
  className: PropTypes.string,
};
