import React from 'react'
import Toit1 from "../../components/batiments/Immeuble/toit1"

//landing page
const page = () => {
    return (
        <div className="flex flex-col items-center w-full h-full bg-cover bg-fixed bg-no-repeat bg-center bg-[url('./assets/Pixel_Art_Background.jpg')]">
            <div className='flex flex-col justify-center w-2/3 h-auto'>
                <Toit1/>
            </div>
        </div>
           
    )
}

export default page