import React from 'react';

//Images
import modelDiagram from '../images/model_diagram.png';
import reactSvg from '../images/react.svg';
import djangoSvg from '../images/django.svg';
import muiSvg from '../images/material-ui.svg';
import neo4jSvg from '../images/neo4j.svg';
import tfSvg from '../images/tensorflow.svg';
import pytorch from '../images/pytorch.svg';

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
                                Web Document Analyzer and Classification engine can analyze and classify unidentified web documents. The app provides the following features:
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Domain Modeling" secondary="Categorizes unlabelled Web Document to a specific Domain." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Keyword and Topics Extraction" secondary="Extract the most important keywords and related topics that define the web document provided." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Knowledge Graph" secondary="Provide graphical repesentation of Domains and related Topics." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Similar Documents" secondary="Provide links to web documents based on similar domain and topics." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Abstractive Text Summarization" secondary="Gives a 1-2 liner defining the meaning of the text extracted for a given web document." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Performance and Audit Report" secondary="Provides Performance and Audit Report for a provides web document using lighthouse." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Extractive Text Summarization" secondary="Gives a short summary of the text extracted for a given web document." />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Metadata" secondary="Provides matadata of the web document e.g. Language, document size and document matadata." />
                                </ListItem>
                            </List>
                        </Box>
                        <Box mt={6} >
                            <Box>
                                <Typography variant='h5'>
                                    Model Diagram depicting Web Document Classification            
                                </Typography>
                            </Box>
                            <Box pt={2} sx={{ textAlign: 'center' }}>
                                <img src={modelDiagram} alt="banner" style={{ height: '50%', maxWidth: '900px', width: '100%' }} />
                            </Box>
                        </Box>
                        <Box mt={8}>
                            <Box mt={2} ml={3}>
                                <Box >
                                    <Typography variant='body1'>
                                        Frontend:
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={reactSvg} alt="react-logo" style={{ height: 50, width: 55 }} /> &nbsp;
                                            <ListItemText primary="React" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={muiSvg} alt="MUI-logo" /> &nbsp;&nbsp;
                                            <ListItemText primary="Material UI" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant='body1'>
                                        Backend:
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={djangoSvg} alt="Django-logo" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="Django REST Framework" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={neo4jSvg} alt="Neo4j-logo" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="Neo4j" />
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box mt={2}>
                                    <Typography variant='body1'>
                                        Deep Learning (NLP):
                                    </Typography>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={tfSvg} alt="TF-logo" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="TensorFlow" />
                                        </ListItem>
                                        {" "}
                                        <ListItem disablePadding>
                                            <ListItemIcon>
                                                <ArrowRightIcon />
                                            </ListItemIcon>
                                            <img src={pytorch} alt="pytorch" style={{ height: 50, width: 55 }} />
                                            <ListItemText primary="PyTorch" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Approach;