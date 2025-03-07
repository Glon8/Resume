import React from 'react'

export default function Card({ element }) {
    const cardRedirect = () => {
        window.location.href = element.reference;
    }

    return (<div className='h-auto border border-gray-500/10 mt-5 rounded-lg mx-[1%] bg-white/85 transition-all delay-100 duration-200 hover:bg-red-300 hover:drop-shadow-lg' onClick={cardRedirect}>

        <img className='rounded-t-lg rounded-b' src={element.image} alt='projects pic'/>
        <h4 className='mx-1 mb-2 font-medium'>{element.title}</h4>
        <p className='text-sm mx-2 mb-2'>{element.description}</p>

    </div>)
}
