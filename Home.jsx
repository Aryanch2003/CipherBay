import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
   <>
     <div className="home" id="home">
        <main>
            <h1>CipherBay</h1>
            <p>A true Blockchain to trade</p>
        </main>
       
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
        

       
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>CipherBay is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space. Its mission is to make crypto discoverable and efficient globally by empowering retail users with unbiased, high quality and accurate information for drawing their own informed conclusions.</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
            
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: "0.5s",
            
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "0.7s",
            
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay: "1s",
            
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>


            </article>
        </div>
    </div>
   </>
  )
}

export default Home