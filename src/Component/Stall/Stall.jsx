import React, { useEffect, useState } from 'react'
import Title from '../Shared/Title'
import Card from './Card';
import { useParams } from 'react-router-dom';

const Stall = ({ filteredCategory}) => {
  const [stalls, setStalls] = useState([]);

  useEffect(()=>{
    fetch('/stall.json')
      .then(res => res.json())
      .then(data => setStalls(data))
      .catch(err => console.error(err));
  },[]);

  console.log(filteredCategory);
  
  return (
    <div className='my-10 md:my-20'>
        <Title head={'Our'} head2={"Stall's"}></Title>

        <div className='grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 '>
          { filteredCategory &&  filteredCategory.map((stall , idx)=> <Card key={idx} stall ={stall}></Card> )}
        </div>
    </div>
  )
}

export default Stall