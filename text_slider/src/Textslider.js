import {useEffect} from "react";
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Textslider = () => {
  return (
    <div className='App'>
      Hello! <Typewriter
            words={['HTML', 'UI/UX', 'Web Designer', 'React!']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
    </div>
  )
}
export default Textslider;