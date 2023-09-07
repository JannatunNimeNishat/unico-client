import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
function Button({ btn_width, btn_text, isArrowImg }) {
    return (
        <>
            <button
                className={`w-[${btn_width}] bg-[#9d2235]  text-white font-bold px-4 py-3 flex gap-2 items-center justify-center`}
            >{btn_text}
                {
                    isArrowImg && <AiOutlineArrowRight className='h-5 w-5 font-bold' />
                }
            </button>

        </>
    )
}

export default Button