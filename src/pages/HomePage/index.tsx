import { Image } from 'react-bootstrap';
import AppLogo from '../../assets/images/logo.png';
import './style.css';

const HomePage = () => {
    return (
        <div className="row no-gutters">
            <div className="max-wrapper d-flex flex-column align-items-start">
                <div className="app-logo">
                    <Image src={AppLogo} />
                </div>

                <h1>EVENT TITLE</h1>

                <p>YOUR SLOGAN HERE</p>

                <a href="#FIXME" title={`Let's Start`} className='rounded-btn gradient-btn'>Let's Start</a>
            </div>

        </div>

    );
}

export default HomePage;