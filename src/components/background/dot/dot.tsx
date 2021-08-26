import styles from '../../../../styles/game.module.css';
import { DOT_COLORS, DOT_RADIUS } from "../../../constants/dot.constants";
import React from "react";

export interface IDot {
  x: number;
  y: number;
  color: string;
  radius: number;
}

export interface Props {
  dot: IDot;
  removeDot: (dot: IDot) => void;
  size: number;
}

export const initDot = (): IDot => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    color: (DOT_COLORS)[(Math.floor(Math.random() * DOT_COLORS.length))],
    radius: (DOT_RADIUS)[(Math.floor(Math.random() * DOT_RADIUS.length))],
  }
}

export const Dot = ({
  dot,
  removeDot,
  size
}: Props) => {
  const { x, y, radius, color } = dot;
  return (
    <div
      className={styles.dotWrapper}
      style={{
        top: y,
        left: x,
        transform: 'translate(-50%, -50%)'
      }}
      onMouseOver={() => removeDot(dot)}
    >
      <div
        className={styles.dot}
        style={{
          width: radius,
          height: radius,
          top: y,
          left: x,
          backgroundColor: color,
          margin: `${size}px`
        }}
      />
    </div>
  )
}

export default Dot;