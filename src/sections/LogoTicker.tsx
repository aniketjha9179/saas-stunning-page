'use client'
import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'
import { motion } from 'framer-motion';


export const LogoTicker = () => {
  return (
    <div className=' py-8 md:py-12 bg-white '>
      <div className='container'>
        <div className=' overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div
            animate={{
              translateX: '-50%'
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20, // jitna slow chahte utna bada value
              ease: 'linear',

            }}
            className=' flex gap-14 flex-none  pr-14'>
            <Image src={acmeLogo} alt='Acme logo' className='Logo-ticker-image' />
            <Image src={quantumLogo} alt='quantum Logo' className='Logo-ticker-image' />
            <Image src={echoLogo} alt='echo Logo' className='Logo-ticker-image' />
            <Image src={celestialLogo} alt='celestialLogo' className='Logo-ticker-image' />
            <Image src={pulseLogo} alt='pulse Logo' className='Logo-ticker-image' />
            <Image src={apexLogo} alt='apex Logo' className='Logo-ticker-image' />
            {/* second set of logo for animation */}
            <Image src={acmeLogo} alt='Acme logo' className='Logo-ticker-image' />
            <Image src={quantumLogo} alt='quantum Logo' className='Logo-ticker-image' />
            <Image src={echoLogo} alt='echo Logo' className='Logo-ticker-image' />
            <Image src={celestialLogo} alt='celestialLogo' className='Logo-ticker-image' />
            <Image src={pulseLogo} alt='pulse Logo' className='Logo-ticker-image' />
            <Image src={apexLogo} alt='apex Logo' className='Logo-ticker-image' />
          </motion.div>
        </div>
      </div>
    </div>
  )
};
