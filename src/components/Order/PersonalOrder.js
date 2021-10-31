import React from 'react'

const PersonalOrder = ({order}) => {
    return (
        <div>
            <div className="container items-center px-5 py-12 lg:px-20">
                <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                    <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                        <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                            <img src={`${order.image}`} alt="placeholder" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col w-full text-blueGray-500 lg:ml-4">
                            <h2 className="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font text-4xl font-bold">{order.name}</h2>
                            <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                                {order.description} <br />
                            </p>
                        </div>

                    </div>

                </div>
                {/* <ToastContainer /> */}
            </div>
        </div>
    )
}

export default PersonalOrder
