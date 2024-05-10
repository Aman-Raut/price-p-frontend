
import { Box, Container, Grid, Typography } from "@mui/material";

import React from 'react'

export const Footer = () => {
    return (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "secondary.main",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <Typography color="white" variant="h5">
                  Customer Support 24x7
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="textSecondary" variant="subtitle1">
                  {`${new Date().getFullYear()} | All Rights Reserved | amanraut13@gmail.com | 9102965240`}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );
}


export default Footer;