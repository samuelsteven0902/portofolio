import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center pb-12 group'>
      <a href={item.link} target='_blank'><div className='mb-8'>
        <img className='rounded-2xl  ring-0 group-hover:ring-4 ring-[#ECB365] transition duration-700 ease-in-out' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3 group-hover:text-[#ECB365] transition duration-700 ease-in-out'>{item.name}</h3></a>
    </div>
  );
};

export default Project;
