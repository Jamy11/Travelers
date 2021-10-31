import React from 'react'
import useAllOrder from '../../hooks/useAllOrder'
import AllOrder from './AllOrder'


const AllOrders = () => {
    const { allOrder, setAllOrder } = useAllOrder()
    const deleteOrderFromAllOrder = (id)=>{
        const newOrderList = allOrder.filter(orderId=> orderId._id !== id)
        setAllOrder(newOrderList)
    }
    return (
        <div>
            <div>
                <h1 className='text-center font-bold pt-6'>All Orders</h1>
                {allOrder.length>=1?
                
                allOrder.map(order => <AllOrder deleteOrderFromAllOrder={deleteOrderFromAllOrder} order={order} key={order._id} />)
            
            :<h1 className='text-center font-bold pt-6 text-red-500'>Please Add Something</h1>}

            </div>
        </div>
    )
}

export default AllOrders
