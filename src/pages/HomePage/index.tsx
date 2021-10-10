import AppLogo from "../../assets/images/logo.png";
import "./style.css";
import Image from "../../components/Image";

const HomePage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        marginTop: "auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className='app-logo'>
        <Image src={AppLogo} alt={"logo"} />
      </div>
      <h1>EVENT TITLE</h1>
      <p>YOUR SLOGAN HERE</p>
      <a
        href='/booth'
        title={`Let's Start`}
        className='rounded-btn gradient-btn'
      >
        Let's Start
      </a>
    </div>
  );
};

export default HomePage;
