import React from 'react';
import bg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>Tech-O-hceT</h1>
                <p>Solution to all problems</p>
            </main>
        </div>
        <div className="home2">
            <img src={bg} alt="Graphics" />
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo incidunt quasi minus recusandae sed voluptatem, blanditiis praesentium itaque velit odio, eum in vel veniam?</p>
            </div>
        </div>

        <div className="home3" id ="about">
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis esse amet quibusdam rerum, repellat asperiores hic ratione nesciunt optio quae assumenda, officia nisi. Tempora, mollitia accusantium doloribus molestias esse inventore! Architecto repudiandae quasi iste, ipsum nihil quo distinctio corrupti odit ad? Autem iste cupiditate nesciunt. Itaque optio eos nemo, perferendis rem commodi distinctio? Fugit, vero.    
                </p>
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle />
                        <p>Google </p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: "1s",
                    }}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home
