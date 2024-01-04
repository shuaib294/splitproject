import React from 'react'
import { useRef } from 'react';
import Mens from '../components/Mens';
import Womens from '../components/Womens';
import Kids from '../components/Kids';
import { back } from '../assets/images';
import { Link } from 'react-router-dom';

const Categories = () => {

    const mens = useRef(null);
    const womens = useRef(null);
    const kids = useRef(null);

    const scrollTosection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior : 'smooth'
    })

}

  return (
    <React.Fragment>
    <section>
      <div className='w-screen grid grid-rows-2 text-4xl md:grid-cols-2'>
          <div className=' fixed left-0 flex flex-col justify-start items-center w-[400px] h-full bg-gray-100 centered'>
              <h1 className="text-4xl text-black font-semibold text-center mt-10"><Link to="/"><button ><img className=" pe-4 h-14 rounded-full" src={back}/></button></Link>Categories</h1>
              <div className="pt-20">
                <ul className="text-black text-[30px] font-semibold space-y-10">
                    <li><button onClick={() => {scrollTosection(mens)}}>Men </button></li>
                    <li><button onClick={() => {scrollTosection(womens)}}>Women</button></li>
                    <li><button onClick={() => {scrollTosection(kids)}}>Kids</button></li>
                </ul>
              </div>
          </div>

          {/* page 2 */}
          <div className="xl:w-[1520px] lg:w-[1200px] md:w-[800px] sm:w-[600px] relative left-[400px]relative left-[400px] flex flex-col items-center">

                <div className="w-full h-[900px] ps-40" ref={mens} >
                  <Mens />
                </div>
                
                
                <div className="w-full h-[900px] ps-40" ref={womens}>
                  <Womens />
                </div>
                
                
                <div className="w-full h-[900px] ps-40" ref={kids}>
                  <Kids />
                </div>
                  
            </div>
            </div>
    </section>
    </React.Fragment>
  )
}

export default Categories
