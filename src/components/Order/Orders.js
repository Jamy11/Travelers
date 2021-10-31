import React from 'react'
import useAuth from '../../hooks/useAuth'
import useMyOrder from '../../hooks/useMyOrder'
import PersonalOrder from './PersonalOrder'

const Orders = () => {
    const { user } = useAuth()
    const { myOrder } = useMyOrder(user.email)
    return (
        <div>
            <h1 className='text-center font-bold pt-6'>My Orders</h1>
            {myOrder.map(order=> <PersonalOrder order={order} key={order._id}/>)}
            
        </div>
    )
}

export default Orders
