import Head from 'next/head';
import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import styles from '../styles/Home.module.css';
import SectionCards from '../components/card/section-cards';

import { getVideos } from '../lib/videos';

export async function getServerSideProps() {
  const disneyVideos = await getVideos('disney trailer');
  const productivityVideos = await getVideos('productivity');
  const travelVideos = await getVideos('travel');
  const popularVideos = await getVideos('popular');

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
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

      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' videos={disneyVideos} size='large' />
        <SectionCards title='Travel' videos={travelVideos} size='small' />
        <SectionCards title='Productivity' videos={productivityVideos} size='medium' />
        <SectionCards title='Popular' videos={popularVideos} size='small' />
      </div>
    </div>
  );
}
