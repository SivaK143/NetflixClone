import React from 'react'

const url = "https://image.tmdb.org/t/p/w500";

const Card = ({img}) => {
  return (
    <img className="card" src={img} alt=''/>
  )
}


const Row = ({title,
    arr = []
}) => {
  return (
    <div className='row'>
      <h2>{title}</h2>

        <div>
            {arr.map((item, index)=>(
                <Card key={index} img={`${url}${item.poster_path}`}/>
            ))}
       </div>
    </div>
  )
}

export default Row


