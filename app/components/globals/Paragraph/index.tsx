import { Typography } from "@mui/material"
import type { ComponentProps } from 'react'

export default function Paragraph({ children, ...props }: ComponentProps<typeof Typography>) {
  return (
    <Typography
      variant="body2"
      component="p"
      marginY={theme => theme.spacing(1.5)}
      {...props as any}
    >
      {children}
    </Typography>
  )
}
