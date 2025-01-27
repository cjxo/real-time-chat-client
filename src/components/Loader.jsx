import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/component.module.css";

const Loader = ({ className }) => {
  return <div className={`${styles.loader} ${className}`}></div>
};

const DotLoader = ({ className, label }) => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      if (dots.length > 2) {
        setDots("");
      } else {
        setDots(dots + ".");
      }
    }, 500);

    return () => clearInterval(timer);
  }, [dots]);
  return <>{`${label}${dots}`}</>;
};

export default Loader;
export { DotLoader };

Loader.propTypes = {
  className: PropTypes.string,
};

DotLoader.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};
