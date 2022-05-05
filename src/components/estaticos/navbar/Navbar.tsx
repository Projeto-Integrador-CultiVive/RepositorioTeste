import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className="tool">
                    <Box className='cursor logo'>
                        <Link className="links" to="/">
                            <Typography variant="h5" >
                                <img src="https://i.imgur.com/OORgFQD.png" width="50px"></img>
                            </Typography>
                        </Link>
                    </Box>

                    <Box className="icon" display="flex" justifyContent="start">
                        <Box mx={1} className='cursor icon1'>
                            <Link className="links" to="/">
                                <Typography variant="h6">
                                    Home
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor icon2'>
                            <Link className="links" to="/produtos">
                                <Typography variant="h6">
                                    Produtos
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor icon3'>
                            <Link className="links" to="/contato">
                                <Typography variant="h6">
                                    Contato
                                </Typography>
                            </Link>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor icon4'>
                                <Typography variant="h6" >
                                    Login
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;