import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="contact">
                <h1 className="heading-section">Contact Us</h1>
                <div className="container1">
                    <article className="contact-section">
                        <strong className="contact-heading">Head Branch Address</strong>
                        <p className="contact-paragraph">
                        Wellness Warrior,Near D.Y.Patil college,Akurdi,Pune
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Email</strong>
                        <p className="contact-paragraph">
                        WellnessWarrior@gmail.com
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Phone Number</strong>
                        <p className="contact-paragraph">
                            +91 9922072898 <br/>
                            +91 9284757259
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Contact