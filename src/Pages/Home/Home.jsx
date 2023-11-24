import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Feature from "./Feature";
import CountDown from "./CountDown";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Rapid Route | Home
                </title>
            </Helmet>

            <Banner></Banner>
            <Feature></Feature>
            <CountDown></CountDown>

        </div>
    );
};

export default Home;