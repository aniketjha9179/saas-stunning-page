'use client'

import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import { motion,useScroll,useTransform } from 'framer-motion'
import Image from 'next/image';
import { useRef } from 'react'

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
 const {scrollYProgress}= useScroll({
    target:sectionRef,
    offset:['start end','end start']
  })
  const translateY = useTransform(scrollYProgress,[0,1],[1250,-1250])


  return (
    <section ref={sectionRef} className=' bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip'>
      <div className="container">
        <div className='section-heading'>
        <div className=' flex justify-center'>
          <div className="tag">Boost your productivity</div>
        </div>

        <h2 className=' section-title mt-5 '>A More effective way to track progress</h2>
        <p className='section-description mt-5'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
        </div>
        <div className=' relative'>
        <Image src={productImage} alt='product image' className='mt-10' />
        <motion.img
        style={{
          translateY,
        }}
        src={pyramidImage.src} alt='pyramid image' height={262} width={262} className='hidden md:block absolute  -right-36 -top-32' />
        <motion.img 
        style={{
          // example
          // translateY:translateY,
          translateY,
        }}
        src={tubeImage.src} alt='tube image' height={248} width={248} className='hidden md:block absolute  bottom-24 -left-36' />
        </div>
        {/* if 4 wanted to add 4 section  */}
      </div>
    </section>
  )
};
