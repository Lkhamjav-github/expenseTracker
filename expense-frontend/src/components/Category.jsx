import React from 'react'
import { Eye } from './icons/Eye'
import { Right } from './icons/Right'
export const Category = (props) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Eye />
                <h3>{props.value}</h3>
            </div>
            <Right />
        </div>

    )
}
