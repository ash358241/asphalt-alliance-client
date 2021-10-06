import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import Feedbacks from '../../Feedbacks/Feedbacks';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import ShowEntries from "../../ShowEntries/ShowEntries";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <ShowEntries></ShowEntries>
            <Feedbacks></Feedbacks>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;