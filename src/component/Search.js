import React, { useState } from 'react';
import './Search.css'
import Image from './image/bg.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Search()
{
    const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('Lawgate');

  const navigate = useNavigate()

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async () => {
    // console.log(budget,location,"hoihjojhj")
    if (!budget) {
        alert('Please enter a budget.');
        return;
      }
    try {
      // const response = await axios.get(`http://localhost:8080/rooms/room?price=${budget}&location=${location}`);
      const response = await axios.get(`https://priceprediction-api.vercel.app/rooms/room?price=${budget}&location=${location}`);
      console.log(response.data);
      if(response)
      {
        navigate("/list",{ state: { responseData: response.data } })

      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    function getData(val){
        console.warn(val.target.value)
    }
    return(
        <>
        <section className="hero" style={{ backgroundImage: `url(${Image})` }}>
            <div className="content">
                <h1>Enter your Budget</h1>
                <p>Compare and get the cheapest rooms/pg near Lovely Professional University</p>
                <input type="number" placeholder = 'between 5000-25000/pm' value={budget}
            onChange={handleBudgetChange}/> <br />
                <label> 
                    <h4>Place near lovely professional University</h4> 
                    <select className='Dropdown' value={location} onChange={handleLocationChange}>
                    <option value="Lawgate">Lawgate</option>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Phagwara">Phagwara</option>
                    <option value="Hardaspur">Hardaspur</option>
                    <option value="Deep Nagar">Deep Nagar</option>
                    </select>
                </label> <br />
                    <button onClick={handleSubmit}>Submit</button>
            </div>
        </section>
        </>
    )
}

export default Search;