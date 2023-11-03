import React, { useEffect } from 'react'
import planeWindow from "../../assets/images/planeWindow.jpg"
import planeWindowTwo from "../../assets/images/planeWindowTwo.jpg"
import planeWindowThree from "../../assets/images/planeWindowThree.jpg"

import Aos from 'aos'
import "aos/dist/aos.css"

const Support = () => {

    useEffect(
        () => {
            Aos.init({ duration: 2000 })
        }
        , [])

    return (
        <div id='support' className='support container section'>
            <div className="sectionContainer">

                <div className="tittlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">

                        <div data-aos="fade-down" data-aos-duration='2500' className="singleInfo">
                            <span className='number'>01</span>
                            <h4>Travel requirement for Dubai</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                            </p>
                        </div>

                        <div data-aos="fade-down" data-aos-duration='3500' className="singleInfo">
                            <span className='number colorOne'>02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                            </p>
                        </div>

                        <div data-aos="fade-down" data-aos-duration='4500' className="singleInfo">
                            <span className='number colorTwo'>03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                            </p>
                        </div>

                    </div>

                    <div data-aos="fade-left" data-aos-duration='2500' className="imgDiv">
                        <img src={planeWindow} alt="" />
                        {/* <img src={planeWindowTwo} alt="" />
                        <img src={planeWindowThree} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
