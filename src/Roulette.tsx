import pointer from './assets/pointer.png'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { giftsList } from './giftsList'
import gift from './assets/gift.png'
import giftTextBg from './assets/giftTextBg.png'

interface IRouletteProps {
    textAnimation: Variants
    isArrowClicked: boolean,
}

const confettiAnimation: Variants = {
    hidden: (custom: number) => ({
        y: custom,
        opacity: .5
    }),
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        rotate: (custom === 100) && 180 || 0 
    })
}

const Roulette = ({ textAnimation, isArrowClicked }: IRouletteProps) => {
    const [isSpin, setIsSpin] = useState<boolean>(false)
    const [isFinalGiftScreen, setIsFinalGiftScreen] = useState(false)

    const spinHandler = () => {
        setIsSpin(true)
        setTimeout(() => {
            setIsFinalGiftScreen(true)
        }, 11700)
    }

    return (
        <div className='h-screen flex flex-col justify-evenly items-center p-2 bg-[#ffd1ed] '>

            <motion.div className='w-[100%]' initial='hidden' animate={isArrowClicked && 'visible'}>
                <motion.p variants={textAnimation} custom={1} className='mainText'>выйграй</motion.p>
                <motion.p variants={textAnimation} custom={1.2} className='mainText2'>свой</motion.p>
                <motion.p variants={textAnimation} custom={1.3} className='mainText'>приз!</motion.p>
            </motion.div>

            <div className='flex flex-col items-center relative'>
                <div className='overflow-hidden w-[400px] h-[200px]'>
                    <motion.ul className='inline-flex gap-2 -ml-80' initial={{ x: 0 }} animate={isSpin && {
                        x: -15845, transition: {
                            duration: 11, ease: 'easeOut'
                        }
                    }}>
                        {giftsList.map(gift => (
                            <li key={gift.img}>
                                <img
                                    src={gift.img}
                                    alt="Чтото пошло не так, перезагрузи страницу"
                                    className='w-[120px]' />
                                <span>{gift.title}</span>
                            </li>
                        ))}

                    </motion.ul>
                </div>
                <img
                    src={pointer}
                    alt="Чтото пошло не так, перезагрузи страницу"
                    className='-rotate-90 mt-2 w-[30px] pointer' />
            </div>

            <motion.button
                className={`px-6 py-4 bg-[#f51c51] text-white text-[20px] uppercase font-bold rounded-[30px] ${!isSpin && 'pulsations'}`}
                onClick={spinHandler}
                disabled={isSpin}>
                Крутить барабан
            </motion.button>

            {isFinalGiftScreen &&
                <motion.div
                    className='z-30 absolute bg-[#000000af] h-screen w-[100%] flex flex-col items-center justify-center overflow-hidden'
                    initial={{ opacity: 0 }}
                    animate={isFinalGiftScreen && { opacity: 1 }}>

                    <motion.img initial='hidden' whileInView='visible' custom={-100} variants={confettiAnimation} src={giftTextBg} alt="Чтото пошло не так, перезагрузи сайт" className='absolute top-0 z-30' />

                    <p className='firstText'>Твой приз!</p>
                    <div className='myOwnShadow relative'>
                    </div>

                    <img src={gift} alt="Чтото пошло не так, перезагрузи сайт" className='absolute top-50 left-50 w-[370px]' />

                    <motion.img initial='hidden' whileInView='visible' custom={100} variants={confettiAnimation} src={giftTextBg} alt="Чтото пошло не так, перезагрузи сайт" className='absolute bottom-0 z-30 rotate-180' />

                </motion.div>
            }

        </div>
    )
}

export default Roulette