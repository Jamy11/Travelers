import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { failed, notify } from '../helperToast';


const Service = ({ item }) => {
  const { user } = useAuth()

  const addToCart = (bookedItem) => {
    bookedItem.useremail = user.email;
    bookedItem.oldId = bookedItem._id
    delete bookedItem._id

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/service/order`, bookedItem)
      .then(function (response) {
        if (response.data.insertedId) {
          notify('Order Placed 🦄 ')
        }
        else {
          failed('Could Not add item')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="container items-center px-5 py-12 lg:px-20">
        <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
          <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
            <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
              <img src={`${item.image}`} alt="placeholder" className="rounded-lg" />
            </div>
            <div className="flex flex-col w-full text-blueGray-500 lg:ml-4">
              <h2 className="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font text-4xl font-bold">{item.name}</h2>
              <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                {item.description} <br />
              </p>
              <p>
              Package 4 Days Cost: {item.cost}
              </p>
            </div>

          </div>
          {user.displayName ?

            <Button onClick={() => addToCart(item)}>Book Now</Button>
            :
            <Link to='/login'>
              <Button >Book Now</Button>

            </Link>
          }

        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Service