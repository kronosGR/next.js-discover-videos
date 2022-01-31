import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/banner';
import Card from '../components/card/card';
import NavBar from '../components/nav/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KronosFlix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar username='Kronos@gmail.com' />
      <Banner
        title='Clifford the green dog'
        subTitle='a cute dog'
        imgUrl='/static/clifford.webp'
      />

      <Card imgUrl='/static/clifford.webp' size='large' />
      <Card imgUrl='/static/clifford.webp' size='medium' />
      <Card imgUrl='/static/clifford.webp' size='small' />
    </div>
  );
}
