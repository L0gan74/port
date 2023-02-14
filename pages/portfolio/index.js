import style from "./Portfolio.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="container">
      <div className={style.portfolio}>
        <h1>Skills</h1>
        <div className={style.cards}>
          <div className={style.card}>
            <Image priority="false" src="/html5css3badges.png"
            width={200} height={200} alt="css html"/>
          </div>
          <div className={style.card}>qefqef</div>
          <div className={style.card}>qefqef</div>
          <div className={style.card}>qefqef</div>
          <div className={style.card}>qefqef</div>
          <div className={style.card}>qefqef</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
