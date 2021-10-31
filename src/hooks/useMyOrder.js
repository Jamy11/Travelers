import {useState,useEffect} from 'react'

const useMyOrder = (email) => {
    const [myOrder, setMyOrder] = useState([])
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/my-orders/${email}`)
        .then(res =>res.json())
        .then(result => setMyOrder(result))
    }, [])

    return {
        myOrder,
        setMyOrder
    }
}

export default useMyOrder
