import React from 'react';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ShowEntries from "../../ShowEntries/ShowEntries";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>\
            <ShowEntries></ShowEntries>
            <Footer></Footer>
        </div>
    );
};

export default Home;