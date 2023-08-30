import React from 'react'
// import {TrainerContext} from '../context/TrainerContext';

import {GiMuscleUp,GiKnifeFork, GiHeartBeats, GiRobe} from 'react-icons/gi';

const AboutHome = () => {
    // const value  = React.useContext(TrainerContext);
    return (
        <section className="about-home">
            <h1 className="about-home__heading">who are we</h1> 
            <p className="about-home__block">
                <span className="lead">We</span>, at Wellness Warrior are <strong>the most effective lifestyle studio</strong> in the country.We, at Wellness Warrior, believe in living healthy and happy. Our focus is to help you guide you to a better life style. We focus on nutrition, cross-fit exercise, endurance training, increasing positivity in life and much more.  Our trainers are there to help you whenever you need. They will guide you, mentor you, motivate you and help you become the best YOU. 
            </p>
            <h1 className="about-home__heading about-home__heading--sub">
                Our Goal
            </h1>
            <p className="about-home__block">
                 We, at Wellness Warrior, promise you to help you become healthy, fit, energetic, mentally healthy and calm. We strive to keep you fit & healthy through a range of holistic offerings that include fitness and yoga, healthy meals, mental wellbeing and primary care. Now anyone can now stay healthy from the safety of their homes with just a single app that helps you to <strong>#BeBetterEveryDay</strong>
    
            </p>
            <div className="about-home-flex">
                <div className="about-home__sub-block">
                    <GiMuscleUp  className="home-icon"/>
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Core Body exercises</h4>
                        <p className="muted-paragraph">
                        The stomach muscles sometimes are called abs. Core exercises train the muscles in your core to work in harmony. This leads to better balance and steadiness, also called stability. Stability is important whether you're on the playing field or doing regular activities.
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiRobe className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Personal Trainers</h4>
                        <p className="muted-paragraph">
                            Trainers increases accountability. You’ll learn about health, fitness, and your body.Helps with goal setting.You’ll get an individualized plan.Flexible schedule and format.Promotes exercise variety. Promotes a healthy lifestyle change. Helps your mental health.
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiKnifeFork className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Nutrition and planning</h4>
                        <p className="muted-paragraph">Personalized meal planning helps reduce body fat and build muscle by regulating your intake of hydration, micronutrients, and macronutrients.
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                   <GiHeartBeats className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Yoga & Spa</h4>
                        <p className="muted-paragraph">
                        Yoga improves strength, balance and flexibility. Yoga helps with back pain relief. Yoga can ease arthritis symptoms. Yoga relaxes you, to help you sleep better. Yoga connects you with a supportive community. 
                        </p>
                    </div>
                </div>

            </div>
        </section> 
    )
}

export default AboutHome


// className="abhout-home__heading"