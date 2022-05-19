import { Link, Grid, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Grid item xs={12}>
      <Typography
        variant="body2"
        align="center"
      >
        Para mais informações, pode acessar meu&nbsp;
        <Link href="https://www.linkedin.com/in/ozeias-ribeiro">
          LinkedIn
        </Link>
        &nbsp;e para ver meus projetos acesse meu&nbsp;
        <Link href="https://github.com/OzRib">
          GitHub
        </Link>
        .
      </Typography>
    </Grid>
  )
}
