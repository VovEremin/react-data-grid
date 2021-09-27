import React from 'react'
import Theme from './Theme'
import { AppBar, Container, Grid, Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'

export default function Header({darkState,handleThemeChange}) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
              alignItems="center"
          >
            <Typography variant='h6'>React Data Grid: Cell Editors</Typography>
            <Theme darkState={darkState} handleThemeChange={handleThemeChange}/>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
    )
}