import React from 'react';

//Images
import modelDiagram from '../images/model_diagram.png';

// MUI
import { Box, Container, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Approach = () => {
    return (
        <>
            <Container>
                <Box sx={{ textAlign: "left" }}>
                    <Box mt={5} mb={4} pt={3} pb={3} pl={4} pr={4} style={{ backgroundColor: "#e8f5e9", borderRadius: "20px" }}>
                        <Box justifyContent="flex-start" mb={2}>
                            <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                                Web Document Analyzer and Classification Engine
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='body1'>
                                Web Document Analyzer and Classification engine can analyze and classify unidentified web documents.
                            </Typography>
                        </Box>
                        <Box mt={6} >
                            <Box>
                                <Typography variant='h5'>
                                    Model Diagram depicting text processing
                                </Typography>
                            </Box>
                            <Box pt={2} sx={{ textAlign: 'center' }}>
                                <img src={modelDiagram} alt="banner" style={{ height: '50%', maxWidth: '900px', width: '100%' }} />
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Approach;