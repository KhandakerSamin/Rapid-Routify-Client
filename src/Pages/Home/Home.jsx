import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Feature from "./Feature";
import CountDown from "./CountDown";
import TopDeliveryMan from "./TopDeliveryMan";

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
            <TopDeliveryMan></TopDeliveryMan>

        </div>
    );
};

export default Home;