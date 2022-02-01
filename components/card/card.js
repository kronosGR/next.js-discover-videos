import Image from 'next/image';
import { useState } from 'react';

import styles from './card.module.css';

const Card = (props) => {
  const { imgUrl="/static/cliffor.webp", size = 'medium' } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError=()=>{
    setImgSrc('/static/cliffor.webp')
  }

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt='image'
          width={300}
          height={300}
          layout='fill'
          onError={handleOnError}
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};

export default Card;
