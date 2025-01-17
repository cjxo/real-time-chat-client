import styles from "../styles/component.module.css";

const CoolCheckbox = ({ ...rest }) => {
  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        {...rest}
      />
      <div className={styles.goIn}></div>
    </div>
  );
};

export default CoolCheckbox;