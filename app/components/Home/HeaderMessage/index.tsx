import { Box, Typography } from '@mui/material'

export default function HeaderMessage() {
  return (
    <Box
      sx={theme => ({
        paddingX: theme.spacing(2),
        paddingY: theme.spacing(1.7)
      })}
    >
      <Typography
        variant="caption"
        fontStyle="italic"
        sx={{
          textAlign: {
            xs: 'initial',
            md: 'center'
          }
        }}
        component="p"
      >
        Contribua para um mundo melhor com seu esforço e trabalho.
        Sua maior recompensa não será o que você vai ganhar, mas a pessoa que você se tornará.
      </Typography>
    </Box>
  )
}
