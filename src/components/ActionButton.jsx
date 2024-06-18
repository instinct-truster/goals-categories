import styles from "./ActionButton.module.css";

function ActionButton({ handleClick, icon }) {
  return (
    <div className={styles.actionButton} onClick={() => handleClick()}>
      <img src={icon} alt="icon" />
    </div>
  );
}

export default ActionButton;
