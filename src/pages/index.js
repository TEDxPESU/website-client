import React from 'react';
import { Link } from 'gatsby';
import { Button, Typography } from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'monospace'
    ].join(','),
  },
});

export default () => (
  <ThemeProvider theme={theme}>
    <h1>Home</h1>
    <Typography>Hello Minnesota</Typography>
    <Link to="/about"><Button color="primary">Learn about me &rarr;</Button> </Link>
  </ThemeProvider>
);
