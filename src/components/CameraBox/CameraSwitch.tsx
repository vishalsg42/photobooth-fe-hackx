import Image from '@/components/atoms/Image';
import camIcon from '@/assets/images/camera.png';
import useBooth from '@/hooks/useBooth';
import styles from './style.module.scss';

const CameraSwitch = () => {
  const [{ enableSwitch }, { switchStream }]: any = useBooth();

  if (!enableSwitch) return null;

  return (
    <Image
      className={styles['switch']}
      src={camIcon}
      alt={'switch'}
      title={'Switch'}
      onClick={switchStream}
    />
  );
};

export default CameraSwitch;
