import styles from "./Dropdown.module.css";
import down from "../assets/icons/down.svg";
import { categories } from "../utils/categories";
import { useState } from "react";

function Dropdown({ setTaskData, taskData }) {
  const [openedDropdown, setOpenedDropdown] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setOpenedDropdown(!openedDropdown)}>
        <p>{taskData.category ? taskData.category : "Select a category"}</p>
        <img src={down} alt="down arrow" />
      </div>
      {openedDropdown && (
        <div className={styles.dropdownContent}>
          {categories.map((category) => (
            <p
              key={category.name}
              onClick={(e) => {
                setTaskData({ ...taskData, category: e.target.innerHTML });
                setOpenedDropdown(false);
              }}>
              {category.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
