import { IconButton, Box } from '@mui/material'
import GitHub from '@mui/icons-material/GitHub'
import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import styles from './styles.module.css'

export default function SocialNetworks() {
  return (
    <Box className={styles.socialNetworksContainer}>
      <IconButton
        target="_blank"
        component="a"
        href="https://github.com/OzRib"
      >
        <GitHub />
      </IconButton>
      <IconButton
        target="_blank"
        component="a"
        href="https://instagram.com/ozeias.ribeiro.bin"
      >
        <Instagram />
      </IconButton>
      <IconButton
        target="_blank"
        component="a"
        href="https://linkedin.com/in/ozeias-ribeiro"
      >
        <LinkedIn />
      </IconButton>
    </Box>
  )
}
