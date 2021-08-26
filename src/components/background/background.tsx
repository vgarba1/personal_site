import React from "react";
import styles from '../../../styles/game.module.css'
import {Dot, IDot, initDot} from "./dot/dot";


export const Background = () => {
  const [dots, setDots] = React.useState<IDot[]>([]);
  const [size, setSize] = React.useState<number>(10);
  const [dotsRemoved, setDotsRemoved] = React.useState<number>(0);

  React.useEffect(() => {
    setDots(Array(150 + Math.floor(Math.random() * 800)).fill(0).map(() => initDot()));
    startAddDots();
  }, [setDots]);

  const startAddDots = () => {
    setTimeout(() => {
      setDots((currentDots) => [...(currentDots.slice(0, 4000)), initDot()]);
      startAddDots();
    }, Math.floor(Math.random() * 400));
  };

  const removeDot = (dotToRemove: IDot) => {
    setDots(dots.filter(dot => dot !== dotToRemove));
    setDotsRemoved(dotsRemoved + 1);
    if (dotsRemoved >= 20) {
      setDotsRemoved(0)
      setSize(size + 2)
    }
  }

  return (
    <div
      className={styles.gameWrapper}
    >
      {
        dots.map((dot, index) => (
          <Dot key={index} dot={dot} removeDot={removeDot} size={size}/>
        ))
      }
    </div>
  )
};

export default Background;