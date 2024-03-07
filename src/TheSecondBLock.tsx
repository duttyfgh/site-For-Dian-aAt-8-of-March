import heartContour from './assets/heartContour.png'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Variants } from 'framer-motion';

interface TheSecondBLockProps {
    firstBlockAnimation: Variants;
    textAnimation: Variants
    isSheReady: boolean,
    isArrowClicked: boolean,
    arrowClickHandler: () => void
}

const TheSecondBLock = ({ firstBlockAnimation, isSheReady, textAnimation, isArrowClicked, arrowClickHandler }: TheSecondBLockProps) => {


    return (
        <motion.div
            initial='hidden'
            animate={`${isArrowClicked && 'visible'}`}
            variants={firstBlockAnimation}
            className='flex flex-col items-center justify-between w-[100%] h-screen py-[80px] pb-[120px] bg-[#ffd1ed] absolute top-0 z-10'>

            <motion.div className='mx-8' initial='hidden' animate={isSheReady && 'visible'}>
                <motion.p className='mainText2' variants={textAnimation} custom={1}>c</motion.p>
                <motion.p className='mainText' variants={textAnimation} custom={1.2}>восьмым</motion.p>
                <motion.p className='mainText2  mb-[25px]' variants={textAnimation} custom={1.3}>марта!</motion.p>

                <motion.span
                    className='text-[#ec3c88] text-[20px]'
                    initial={{ opacity: 0 }}
                    animate={isSheReady && { opacity: 1 }}
                    transition={{ delay: .8 }}>
                    твой подарок ждет тебя внизу</motion.span>
            </motion.div>

            <motion.img
                src={heartContour}
                alt="Чтото пошло не так, перезагрузи страницу"
                className='w-[80px]'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                onClick={arrowClickHandler} />
        </motion.div>
    )
}

export default TheSecondBLock