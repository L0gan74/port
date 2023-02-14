import React from "react";
import styles from "./Product.module.css";
import ProductBtn from "./productBtn/ProductBtn";
import ProductItem from "@/components/productItem";
import Link from "next/link";

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products?limit=4");
  const items = await response.json();

  if (!items) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items },
  };
}

const Products = ({ items }) => {
  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <h1>Новости</h1>
        <p>
          Новости новости новости новости новости новости новости новости
          новости
        </p>
      </div>
      <ProductBtn />
      <div className={styles.main}>
        {items &&
          items.map((obj) => (
            <Link href={`/news/${obj.id}`}>
              <ProductItem key={obj.id} obj={obj} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;
