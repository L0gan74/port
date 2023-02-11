import Link from "next/link";
import styles from "../styles/404.module.css";

export default function FourOhFour() {
  return (
    <div className={styles.error}>
      <h1>Введён не корректный URL || Cтраницы не существует</h1>
      <Link href="/">
        Вернутся на главную страницу
      </Link>
    </div>
  );
}
