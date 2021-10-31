import React from 'react'
import useAuth from '../../hooks/useAuth'
import useMyOrder from '../../hooks/useMyOrder'
import PersonalOrder from './PersonalOrder'

const Orders = () => {
    const { user } = useAuth()
    const { myOrder , setMyOrder } = useMyOrder(user.email)
    const deleteOrderFromMyOrder = (id)=>{
        const newOrderList = myOrder.filter(orderId=> orderId._id !== id)
        setMyOrder(newOrderList)
    }
    return (
        <div>
            <h1 className='text-center font-bold pt-6'>My Orders</h1>
            {myOrder.length>=1?
            
            myOrder.map(order=> <PersonalOrder deleteOrderFromMyOrder={deleteOrderFromMyOrder} order={order} key={order._id}/>)
            :
            <h1 className='text-center font-bold pt-6 text-red-500'>Add Someting</h1>}
            
        </div>
    )
}

export default Orders
