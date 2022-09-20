import { useEffect , useState} from "react"

const useData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://visualization-dashboard-server-side-9jnm1cux1-arif6474.vercel.app/data')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return [data, setData]
}

export default useData;