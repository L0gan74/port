import styles from "./Product.module.css";
import ProductBtn from "./productBtn/ProductBtn";
import ProductItem from "./productItem";

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products?limit=6");
  const data = await response.json();

  if (!data){
    return{
        notFound:true,
    }
  }

  return {
    props: { items: data },
  };
}

const Header = ({ items }) => {
  return (
    <section className={styles.product}>
      <div className={styles.header}>
        <h1>Новости</h1>
        <p>
          Новости новости новости новости новости новости новости новости
          новости
        </p>
      </div>
      <ProductBtn />
      <div className={styles.main}>
        {items.map((obj) => (
          <ProductItem key={obj.id} obj={obj} />
        ))}
      </div>
    </section>
  );
};

export default Header;
