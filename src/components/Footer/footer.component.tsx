import React from 'react'
import { CONSTANT, IMAGES } from '../utils/constant'
import Image from 'next/image'

export const DefaultFooter = () => {
  return (
    <div className='footer-component'>
        <div className='bg-leaves w-full h-full'>
            <div className='footer-links flex gap-[60px] p-[24px_0px_13px_77px]'>
                <div className='links flex flex-col gap-2'>
                    <h4 className='font-bold text-sm text-white'>About Us</h4>
                    <h4 className='font-bold text-sm text-white'>Contact Us</h4>
                    <h4 className='font-bold text-sm text-white'>Careers</h4>
                    <h4 className='font-bold text-sm text-white'>Blog</h4>
                </div>
                <div className='links flex flex-col gap-2'>
                    <h4 className='font-bold text-sm text-white'>Udemy Business</h4>
                    <h4 className='font-bold text-sm text-white'>Teach On Udemy</h4>
                    <h4 className='font-bold text-sm text-white'>Get The App</h4>
                </div>
                <div className='links flex flex-col gap-2'>
                    <h4 className='font-bold text-sm text-white'>Help And Support</h4>
                    <h4 className='font-bold text-sm text-white'>Privacy Policy</h4>
                </div>
                
            </div>
            <div className='flex justify-end p-[0px_68px_29px_0px]'>
                    <div className='flex gap-5 items-center'>
                        <h4 className='font-bold text-sm text-white'>Follow Us: </h4>
                        <div className='w-[25px]'>
                            <Image
                            src={IMAGES?.INSTAGRAM}
                            width={500}
                            height={500}
                            alt='instagram'/>
                        </div>
                        <div className='w-[25px]'>
                            <Image
                            src={IMAGES?.FACEBOOK}
                            width={500}
                            height={500}
                            alt='facebook'/>
                        </div>
                        <div className='w-[25px]'>
                            <Image
                            src={IMAGES?.TWITTER}
                            width={500}
                            height={500}
                            alt='twitter'/>
                        </div>
                        <div className='w-[25px]'>
                            <Image
                            src={IMAGES?.YOUTUBE}
                            width={500}
                            height={500}
                            alt='youtube'/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
