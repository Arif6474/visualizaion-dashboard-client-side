import { useEffect , useState} from "react"

const useData = () => {
    const [data, setData] = useState([])
  console.log(data);
    useEffect(() => {
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return [data, setData]
}

export default useData;