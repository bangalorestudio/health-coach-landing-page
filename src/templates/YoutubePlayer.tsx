import className from 'classnames';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ reverse, title, description, videoId }) => {
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': reverse,
    }
  );
  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <YouTube videoId={videoId} onReady={onReady} onError={onError} />
      </div>
    </div>
  );
};

export { YouTubePlayer };
