import React from 'react'


const Card = ({user}) => {
    const {firstName,lastName,photourl,about,age,gender}=user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img 
    className='rounded-full h-32 w-32 mx-auto mt-4 object-cover object-top'
      src={photourl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age&& gender && <p>{age+" "+gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-secondary">Ignore</button>
      <button className="btn btn-primary">Send Request</button>
    </div>
  </div>
</div>
  )
}

export default Card