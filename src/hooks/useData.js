import { useEffect , useState} from "react"

const useData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://visualization-dashboard-server-side.vercel.app/data')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return [data, setData]
}

export default useData;