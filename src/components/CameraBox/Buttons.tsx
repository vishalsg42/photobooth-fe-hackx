import useBooth from "../../hooks/useBooth";
import frameUrls from "../../utility/frameUrl";

const Buttons = () => {
  const [
    { pictureIsClicked },
    {
      takeSelfie,
      handleFileUpload,
      setPictureIsClicked,
      setImageUrl,
      loadFrameWithCamera,
    },
  ]: any = useBooth();

  return (
    <div style={{ textAlign: "center", margin: "20px 0 0" }}>
      {!pictureIsClicked ? (
        <button
          className='btn rounded-btn gradient-btn'
          onClick={async () => {
            takeSelfie();
          }}
        >
          Start
        </button>
      ) : (
        <>
          <button
            className='btn rounded-btn gradient-btn'
            onClick={async () => {
              setImageUrl("");
              setPictureIsClicked(false);
              loadFrameWithCamera(frameUrls[0]);
            }}
          >
            Retake
          </button>
          <button
            className='btn rounded-btn gradient-btn'
            onClick={() => handleFileUpload({})}
          >
            I like It
          </button>
        </>
      )}
    </div>
  );
};

export default Buttons;
