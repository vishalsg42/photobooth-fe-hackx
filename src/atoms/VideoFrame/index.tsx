import cn from 'classnames';

const VideoFrame = ({
  video_url = '',
  size = '16by9',
  background = 'light',
}) => {
  //TODO handle id once recieved from BE api
  const videoId = (video_url || '')
    .replace('https://vimeo.com/', '')
    .split('/')[0];

  return (
    <figure
      className={cn(
        'image',
        { [`is-${size}`]: !!size },
        { [`has-background-${background}`]: !!background },
      )}
    >
      <iframe
        className='has-ratio'
        src={`https://player.vimeo.com/video/${videoId}`}
        frameBorder='0'
        allowFullScreen
      />
    </figure>
  );
};

export default VideoFrame;
