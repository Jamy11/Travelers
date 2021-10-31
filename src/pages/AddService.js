import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { failed, notify } from '../components/helperToast';
import { ToastContainer } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const onSubmit = data => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/service/add`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    notify('Order Placed 🦄 ')
                    reset()
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
        <div>
        <ToastContainer />

            <br />
            <br />
            <br />
            <br />
            <center>
                <div className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Destination Name
                            </label>
                            <input {...register("name", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="name" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Description
                            </label>
                            <input {...register("description", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Description" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Image Link
                            </label>
                            <input {...register("image", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Image Link" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Cost Package 4 days
                            </label>
                            <input {...register("cost", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Cost Package 4 days" />
                        </div>
                        <div className="flex items-center justify-between">
                            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='Submit' />
                        </div>
                    </form>



                </div>
            </center>
        </div>

    )
}

export default AddService
