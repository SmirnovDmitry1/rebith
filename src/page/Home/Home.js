import React from 'react'

import Card from '../../components/Card'
import search from '../../assets/image/search.jpg'
import testimonials from '../../assets/image/testimonials.jpg'

import './Home.scss'

const Home = () => {
    return (
        <div className='Home' >
            <div className='content'>
                <div className='image'></div>
                <div className='description' >
                    <div className='logo' >
                        <strong>Rebirth</strong>
                        <span>Look for where you can eat delicious food all over the world</span>
                        <p>
                            Restaurants, cafes, bars, or simply eateries?
                            Look for places to rest and eat all over the world.
                            See the rating of any institution and choose where you go today.
                            The entire rating is made by users, so be sure that you will not be deceived.
                        </p>
                    </div>
                </div>
                <div className='navigation' >
                    <Card image={search} title='Search for a place' />
                    <Card image={testimonials} title='give feedback' />
                </div>
            </div>
        </div>
    )
}

export default Home