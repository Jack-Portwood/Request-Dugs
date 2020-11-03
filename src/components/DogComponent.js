import React,{useState,useEffect,Fragment} from 'react'
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

    function nextDug(event) {
        fetchData()
    };




return (
  <Fragment>
    <div className="title">
      <h1>Woof Woof</h1>
    </div>

    <div className="Container">
      <img src={dogs.message} className="image" />
    </div>
    <button type="button" onClick={nextDug} className="button">
      Button
    </button>
  </Fragment>
);
}

export default DogComponent;

