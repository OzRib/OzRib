import { Avatar as MuiAvatar } from '@mui/material'
import styles from './styles.module.css'

export default function Avatar() {
  return (
    <MuiAvatar
      className={styles.avatar}
      sx={theme => ({
        borderColor: theme.palette.grey[200],
        borderWidth: theme.spacing(0.75)
      })}
      src="https://github.com/OzRib.png"
    />
  )
}
