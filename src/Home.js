import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
               
               <div className="home__row"> 
                   <Product
                   title="New Apple iPhone 13 Pro with Facetime (256GB) - Sierra Blue"
                   price={29.99}
                   image="https://m.media-amazon.com/images/I/61jLiCovxVL._AC_SL1500_.jpg"
                   rating={5}
                    />
                    <Product
                   title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
                   price={1194}
                   image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg"
                   rating={5}
                    />
               </div>

               <div className="home__row">
               <Product
                   title="2021 Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 2TB) - Silver (5th Generation)"
                   price={2334}
                   image="https://m.media-amazon.com/images/I/81J5bpGahqS._AC_SL1500_.jpg"
                   rating={5}
                    />
                    <Product
                   title="Samsung Galaxy Z Fold3 5G Dual SIM Smartphone, 256GB Storage and 12GB RAM, Phantom Black, 1-Year Warranty"
                   price={1795}
                   image="https://m.media-amazon.com/images/I/71GZ-qdiseL._AC_SL1500_.jpg"
                   rating={3}
                    />
                    <Product
                   title="Sony Playstation 5 Console Standard Edition"
                   price={817}
                   image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg"
                   rating={4}
                    />
               </div>

               <div>
               <Product
                   title="LG 49 inch Curved UltraWide Dual QHD Monitor (5120x1440), IPS, HDR10, Multitask, Dual Controller, USB Type-C, 2x10W Stereo Speakers, Light Sensor - 49WL95C"
                   price={1199}
                   image="https://m.media-amazon.com/images/I/812S8Y+LpWL._AC_SL1500_.jpg"
                   rating={5}
                    />
               </div>

            </div>
        </div>
    )
}

export default Home
