import { Grid } from '@mui/material'
import type { ComponentProps } from 'react'

export default function Column({ children, ...props }: ComponentProps<typeof Grid>) {
  return (
    <Grid
      {...props}
      item
      xs={12}
      lg={6}
    >
      {children}
    </Grid>
  )
}
