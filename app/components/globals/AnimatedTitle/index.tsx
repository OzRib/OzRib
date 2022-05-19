import React from 'react'
import { Typography } from "@mui/material"
import styles from './styles.module.css'

export default function AnimatedTitle() {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        fontStyle="italic"
        className={styles.title}
        sx={{
          animation: 'typeWriter 1s steps(14) forwards, blinkTextCursor 1s normal'
        }}
      >
        Ozeias Ribeiro
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        color="white"
        className={styles.subtitle}
        style={{
          animation: 'typeWriter 1s steps(17) forwards, blinkTextCursor 1s normal infinite',
          animationDelay: '1s'
        }}
      >
        Desenvolvedor web
      </Typography>
    </React.Fragment>
  )
}
