import React from 'react';
import Banneritem from './Banneritem';
import img1 from '../../../assests/Banner/img1.jpg'
import img2 from '../../../assests/Banner/img2.jpg'
import img3 from '../../../assests/Banner/img3.jpg'
import img4 from '../../../assests/Banner/img4.jpg'
import img5 from '../../../assests/Banner/img5.jpg'
import img6 from '../../../assests/Banner/img6.jpg'



const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next:2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full h-96 ">
            {
                bannerData.map(slide=><Banneritem
                    key={slide.id}
                    slide={slide}
                ></Banneritem>)
            }
        </div>
    );
};

export default Banner;