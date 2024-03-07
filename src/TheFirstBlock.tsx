import { motion, Variants } from 'framer-motion'

interface TheFirstBLockProps {
    firstBlockAnimation: Variants
    sheIsReadyHandler: () => void
    isSheReady: boolean
}

const firstTextAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * .2 }

    })
}

const TheFirstBlock = ({ firstBlockAnimation, isSheReady, sheIsReadyHandler }: TheFirstBLockProps) => {
    return (
        <motion.div
            className='w-[100%] h-screen bg-[#f51c51] flex flex-col justify-center items-center absolute top-0 z-50'
            onClick={sheIsReadyHandler}
            initial='hidden'
            animate={`${isSheReady && 'visible'}`}
            variants={firstBlockAnimation}>

            <TheFirstText />

            <span className='text-[#ff4b78] mt-[40px]'>Нажми на экран</span>
        </motion.div>
    )
}

const TheFirstText = () => {
    return (
        <motion.div initial='hidden' animate='visible' className='mb-[40px]'>
            <div className='flex overflow-hidden'>
                <motion.p custom={1} variants={firstTextAnimation} className='firstText mr-3'>Ты</motion.p>
                <motion.p custom={2} variants={firstTextAnimation} className='firstText'>готова ?</motion.p>
            </div>
            <div className='w-[100%] h-[2px] bg-white'></div>

        </motion.div>
    )
}

export default TheFirstBlock