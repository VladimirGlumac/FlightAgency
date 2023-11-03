import React, { useEffect } from 'react'
import paris from "../../assets/images/paris.jpg"
import rome from "../../assets/images/rome.jpg"
import norway from "../../assets/images/norway.jpg"
import newyork from "../../assets/images/newyork.jpg"
import profile1 from "../../assets/images/profile1.jpg"
import profile2 from "../../assets/images/profile2.jpg"
import profile3 from "../../assets/images/profile3.jpg"
import profile4 from "../../assets/images/profile4.jpg"

import Aos from 'aos'
import "aos/dist/aos.css"

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: profile1,
        travelerName: "Taylor In-sook",
        socialLink: '@taylorinsook'
    },
    {
        id: 2,
        destinationImage: rome,
        travelerImage: profile2,
        travelerName: "Polina Kostova",
        socialLink: '@polinakostova'
    },
    {
        id: 3,
        destinationImage: norway,
        travelerImage: profile3,
        travelerName: "Till Daling",
        socialLink: '@tilldaling'
    },
    {
        id: 4,
        destinationImage: newyork,
        travelerImage: profile4,
        travelerName: "Luis Quintero",
        socialLink: '@luisquintero'
    },
]

const Travelers = () => {

    useEffect(
        () => {
            Aos.init({ duration: 2000 })
        }
        , [])

    return (
        <div className='travelers container section' id='customers'>
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration='2500' >Top travelers of this month!</h2>

                <div className="travelersContainer grid">


                    {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
                        return <div data-aos="fade-up" data-aos-duration='2500' key={id} className="singleTraveler">
                            <img src={destinationImage} alt="" className='destinationImage' />
                            <div className="travelerDetails">
                                <img src={travelerImage} className='travelerImage' />
                            </div>
                            <div className="travelerName">
                                <span>{travelerName}</span>
                                <p>{socialLink}</p>
                            </div>
                        </div>
                    })
                    }

                </div>

            </div>
        </div>
    )
}

export default Travelers
