import React,{useState,useEffect} from 'react'
const DogComponent = () => {

    const [hasError, setErrors] = useState(false)
    const [dogs,setDogs] = useState({})

    async function fetchData(){
        const res = await fetch("https://dog.ceo/api/breeds/image/random");

        res 
            .json()
            .then(res=> setDogs(res))
            .catch(err=> setErrors(err));
    }

    useEffect(() =>{
        fetchData();
    },[])




return (
  <div>
    <h1>Woof WOof</h1>
    <img src ={dogs.message}/>
    <hr/>
    <span> has error: {JSON.stringify(hasError)}</span>
  </div>
);
}

export default DogComponent;

