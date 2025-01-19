import PropTypes from "prop-types";
import styles from "../styles/component.module.css"

// anotherRefBecauseWebDevSucks: its either I suck because IDK a better technique,
// OR its just the fact that React is just full of HACKS!
const Input0 = ({ className, anotherRefBecauseWebDevSucks, ...rest }) => {
  return (
    <input className={`${styles.input0} ${className}`} {...rest} ref={anotherRefBecauseWebDevSucks} />
  );
};

const TextArea0 = ({ children, anotherRefBecauseWebDevSucks, className, ...rest }) => {
  return (
    <textarea className={`${styles.input0} ${className}`} {...rest} ref={anotherRefBecauseWebDevSucks}>{children}</textarea>
  );
};

export { Input0, TextArea0 };

Input0.propTypes = TextArea0.propTypes = {
  className: PropTypes.string,
};
