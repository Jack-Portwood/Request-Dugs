import React,{useState,useEffect,Fragment} from 'react'
import {FaDog} from 'react-icons/fa';

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
      <h1>Got Dugs</h1>
    </div>

    <div className="Container">
      <img src={dogs.message} className="image" />
    </div>
    <div className="btn-container">
      <FaDog type="button" onClick={nextDug} className="button"></FaDog>
    </div>
  </Fragment>
);
}

export default DogComponent;

