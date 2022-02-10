

import preLoader from '../../../assets/Filled_fading_balls.gif';

import "./Loader.css";

const Loader = () => {


    return (
        <div className="loader-backdrop">
            <img src={preLoader} className="img-loader" alt="Loading..." />
        </div>
        



    );

}

export default Loader;