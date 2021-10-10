import AppLogo from '@/assets/images/logo.png';
import styles from './style.module.scss';
import Image from '@/components/atoms/Image';
import Container from '@/components/atoms/Container';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const HomePage = () => {
  return (
    <Container className={styles.root}>
      <Image className={styles.image} src={AppLogo} alt={'logo'} />
      <div className={classNames(styles.slogan, 'has-text-weight-bold')}>
        HackX Photobooth
      </div>
      <Link
        to='/booth'
        title={`Let's Start`}
        className='rounded-btn gradient-btn'
      >
        Let's Start
      </Link>
    </Container>
  );
};

export default HomePage;
