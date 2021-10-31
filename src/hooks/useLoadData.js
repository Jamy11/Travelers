import {useState,useEffect} from 'react'

const useLoadData = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/services`)
        .then(res =>res.json())
        .then(result => setData(result))
    }, [])

    return {
        data,
        setData
    }
}

export default useLoadData
