import React from 'react'

const Card = ({ name, header, description, textcolor, textcolortwo }) => {




    return (
        <div className='flex flex-col pt-2 mr-32 mx-auto  gap-2  test '>
            <h1 className={`${textcolor} mt-20 text-4xl lg:text-5xl px-24 ml-10 pt-10 md:ml-40`} style={{ color: `${textcolor}` }}>{name}</h1>
            <h1 className={`${textcolor} break-all text-5xl md:ml-36 mt-16 md:mt-32 `}>{header}</h1>
            <h1 className={`${textcolortwo} text-4xl mt-8 md:mt-12 ml-12 md:ml-40`}>{description}</h1>
        </div>
    )
}

export default Card