import React from 'react'

export const Button = (props) => {
    return (
        <button className='bg-blue text-white rounded-[20px] h-12'> {props.value}</button>
    )
}
