import Image from "next/image";
import Link from "next/link";
import styles from "./productItem.module.css";

const ProductItem = ({obj}) => {
  return (
    <div className={styles.item}>

      <div className={styles.description}>
        <h5>{obj.title}</h5>
        <p>
          Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum...
        </p>
        <Link href="/">Подробнее</Link>
      </div>
    </div>
  );
};

export default ProductItem;
