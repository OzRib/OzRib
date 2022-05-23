import { Box, Button } from '@mui/material'
import AnimatedTitle from '@components/globals/AnimatedTitle'
import styles from './styles.module.css'
import type { ComponentProps } from 'react'
import type { HeaderHeight } from '@type/index'

type HeaderProps = ComponentProps<typeof Box> & {
  headerHeight?: HeaderHeight
}

export default function Header({ children, sx, headerHeight, ...props }: HeaderProps) {
  return (
    <Box
      paddingTop={theme => theme.spacing(2)}
      {...props}
      className={styles.header}
      sx={sx instanceof Function ? theme => ({
        height: headerHeight,
        ...(sx(theme))
      }) : {
        height: headerHeight,
        ...(sx || {}),
      }}
    >
      <AnimatedTitle />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Button color="secondary">
          Sobre
        </Button>
        <Button color="secondary">
          Modelo de negócio
        </Button>
        <Button color="secondary">
          Experiências
        </Button>
        <Button color="secondary">
          Projetos
        </Button>
        <Button color="secondary">
          Contato
        </Button>
      </Box>
    </Box>
  )
}
