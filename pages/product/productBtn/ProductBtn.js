import styles from "./ProductBtn.module.css";

const ProductBtn = () => {
  return (
    <div className={styles.category}>
      <button className={styles.active} type="button">
        Все продукты
      </button>
      <button type="button">Новости 1</button>
      <button type="button">Новости 2</button>
      <button type="button">Новости 3</button>
      <button type="button">Новости 4</button>
    </div>
  );
};

export default ProductBtn;
