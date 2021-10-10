import Columns from '@/components/atoms/Columns';
import Container from '@/components/atoms/Container';
import CameraBox from '@/components/CameraBox';
import FrameSlider from '@/components/FrameSlider';
import cn from 'classnames';

import styles from './booth.module.scss';

const BoothPage = () => {
  return (
    <Container fluid className='page px-0'>
      <Columns className='is-flex-direction-column mx-0'>
        <Columns.Column className='pb-0'>
          <CameraBox />
        </Columns.Column>

        <Columns.Column className={cn(styles['frame-container'], 'mb-2')}>
          <FrameSlider />
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default BoothPage;
