import styles from "./Checkbox.module.css";
import checkmark from "../assets/icons/checkmark.svg";
import { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div className={checked ? styles.checkbox : styles.active}>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <img src={checkmark} alt="checkmark" />
    </div>
  );
}

export default Checkbox;
