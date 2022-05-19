import { Box } from '@mui/material'
import styles from './styles.module.css'
import type { ComponentProps } from 'react'

export default function Header({ children, ...props }: ComponentProps<typeof Box>) {
  return (
    <Box
      {...props}
      className={styles.header}
      sx={theme => ({
        backgroundColor: theme.palette.grey[200]
      })}
    >
      {children}
    </Box>
  )
}
