import { Box } from '@mui/material'
import { ComponentProps } from 'react'

export default function StandardPage({ children, ...props }: ComponentProps<typeof Box>) {
  return (
    <Box
      {...props}
      sx={theme => ({
        backgroundColor: theme.palette.grey[100]
      })}
    >
      {children}
    </Box>
  )
}
