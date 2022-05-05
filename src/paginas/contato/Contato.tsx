import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Contato.css';

function Contato() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Fale com a gente</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/gcJ1Bl7.png"
                        width="400px" height="400px" />
                </Grid>
                <Grid xs={12} className='produtos'>
                </Grid>
            </Grid>
        </>
    );
}

export default Contato;