import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid className="" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#D8E59E", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright</Typography>
                        </Box>
                        <Box className="footer">

                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Cultivive</Typography>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;