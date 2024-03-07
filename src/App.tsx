import { useState } from 'react';
import Roulette from './Roulette';
import TheFirstBlock from './TheFirstBlock';
import TheSecondBLock from './TheSecondBLock';

export const firstBlockAnimation = {
  hidden: {
    y: 0,
    transition: { duration: 1, ease: "easeInOut" }
  },
  visible: {
    height: 10,
    y: -1000,
    transition: { duration: 1, ease: "easeInOut" }
  }
};

const textAnimation = {
  hidden: {
    x: -700
  },
  visible: (custom: number) => ({
    x: 0,
    transition: { delay: custom * .4 }
  })
}

const App = () => {
  const [isSheReady, setIsSheReady] = useState<boolean>(false)
  const [isArrowClicked, setIsArrowClicked] = useState<boolean>(false)

  const sheIsReadyHandler = () => {
    setIsSheReady(true)
  }

  const arrowClickHandler = () => {
    setIsArrowClicked(true)
  }

  return (
    <div className='h-screen overflow-hidden'>

      <TheFirstBlock
        firstBlockAnimation={firstBlockAnimation}
        isSheReady={isSheReady}
        sheIsReadyHandler={sheIsReadyHandler} />

      <TheSecondBLock
        firstBlockAnimation={firstBlockAnimation}
        isSheReady={isSheReady}
        textAnimation={textAnimation}
        arrowClickHandler={arrowClickHandler}
        isArrowClicked={isArrowClicked} />

      <Roulette textAnimation={textAnimation} isArrowClicked={isArrowClicked} />
      
    </div>
  )
}

export default App
