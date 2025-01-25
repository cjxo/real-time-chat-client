import styles from "../styles/component.module.css";
import PropTypes from "prop-types";

const Loader = ({ className }) => {
  return <div className={`${styles.loader} ${className}`}></div>
};

export default Loader;

Loader.propTypes = {
  className: PropTypes.string,
};