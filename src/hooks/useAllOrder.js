import {useState,useEffect} from 'react'

const useAllOrder = (email) => {
    const [allOrder, setAllOrder] = useState([])
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/all-orders/`)
        .then(res =>res.json())
        .then(result => setAllOrder(result))
    }, [])

    return {
        allOrder,
        setAllOrder
    }
}

export default useAllOrder
