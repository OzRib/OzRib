import { Grid } from '@mui/material'
import type { ComponentProps } from 'react'

export default function Body({ children, ...props }: ComponentProps<typeof Grid>) {
  return (
    <Grid
      {...props}
      container
      justifyContent="center"
      spacing={2}
      sx={theme => ({
        paddingX: {
          xs: theme.spacing(2),
          md: theme.spacing(4),
          lg: theme.spacing(16)
        },
        paddingY: theme.spacing(1)
      })}
    >
      {children}
    </Grid>
  )
}
