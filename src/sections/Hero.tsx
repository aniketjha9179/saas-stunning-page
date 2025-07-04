'use client'
import ArrorRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import { motion,useScroll,useTransform,useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react'


export const Hero = () => {
  const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset:['start end','end start']

  })
  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 2]);



  return (
    <section ref={heroRef} className=" pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)]  overflow-x-clip ">

      <div className="container">
        <div className='md:flex  items-center'>
          <div className=" md:w-[478px]">
            <div className=" text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0</div>
            <h1 className=" text-4xl md:text-6xl font-bold tracking-tighter  bg-gradient-to-b  from-black to-[#001e80] text-transparent bg-clip-text  mt-6">Pathway to productivity</h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6 ">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div className=" flex gap-1 items-center mt-[30px]">
              <button className='btn btn-primary'>Get for free</button>
              <button className=" btn btn-text gap-1 items-center justify-center">
                <span>Learn More</span>
                <ArrorRight className='h-5 w-5' />
              </button>
            </div>

          </div>
          {/* right */}
          <div className=' mt-20 md:mt-0 md:h-[648px] md:flex-1 relative '>
            <motion.img 
            animate={{
              translateY:[-30,40],
              rotate: [0, -360],
             
            }}
            transition={{
              repeat:Infinity,
              // repeatType: 'loop',
              repeatType: 'mirror',
              duration:43,
              ease:'easeInOut'
              

            }}
            src={cogImage.src} alt='CogImage' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' />
            <motion.img src={cylinderImage.src}
            style={{
              translateY:translateY,
              // rotate: rotate,
              // opacity: opacity,
              scale: scale,
            }}

            alt='cylinder Image' width={220} height={220} className=' hidden md:block -top-8 -left-32 md:absolute' />
            <Image src={noodleImage} alt='noddleImage' width={220} height={220} className='  hidden lg:block absolute top-[530px] left-[448px]  rotate-[30deg]' />
          </div>

        </div>
      </div>
    </section>
  )
};
