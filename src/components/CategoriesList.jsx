import styles from "./CategoriesList.module.css";
import { categories } from "../utils/categories";
import Card from "./Card";

function CategoriesList() {
  return (
    <div className={styles.categoriesList}>
      {categories.map((category) => (
        <Card key={category.name} col>
          <img className={styles.svg} src={category.icon} alt="icon" />
          <p>{category.name}</p>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesList;
