import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.category}>
      <button className={styles.active} type="button">Все статьи</button>
      <button type="button">Фишинг</button>
    </div>
  );
};

export default Category;
