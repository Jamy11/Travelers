import React from 'react'
import useLoadData from '../../hooks/useLoadData'
import Service from './Service'
// import Service from './Service'

const Services = () => {
    const {data} = useLoadData()
    // console.log(data)
    // console.log(Array.isArray(data))
    return (
        <div id='services'>
            <h1 className='text-center font-bold pt-6'>Explore & Book Now</h1>
            {data.map(item=> <Service item={item} key={item._id}/>)}
        </div>
    )
}

export default Services
