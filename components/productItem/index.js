import Image from "next/image";
import Link from "next/link";
import styles from "./productItem.module.css";

const ProductItem = ({ obj }) => {
  const { title, id } = obj || {};
  return (
    <div className={styles.item}>
      <Image
        src="/unsplash_sxiSod0tyYQ.png"
        alt="Логотип"
        width={380}
        height={215}
      />
      <div className={styles.description}>
        <h5>{title}</h5>
        <p>
          Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum...
        </p>
        <Link href=''>Подробнее</Link>
      </div>
    </div>
  );
};

export default ProductItem;
