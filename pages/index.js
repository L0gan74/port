import Head from "next/head";
import style from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Тест</title>
        <meta property="og:title" content="Тест" key="title" />
        <link rel="icon" href="favicon.png"/>
      </Head>
      <div className={style.main}>
        
      </div>
      </>
  );
}
