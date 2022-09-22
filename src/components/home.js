import React from 'react';

//IMAGE
import bannerlogo from '../images/bannerlogo.svg';

//MUI
import { Box, Button, Container, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';


const Home = () => {
    return (
        <Container>
            <Box sx={{ textAlign: "center" }}>
                <Box mt={6} mb={4} pt={3} pb={3} style={{ backgroundColor: "#e0f2f1", borderRadius: "20px" }}>
                    <Box justifyContent="center" mb={5}>
                        <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                            Web Document Analyzer &amp; Classification Engine
                        </Box>
                    </Box>
                    <img src={bannerlogo} alt="banner" style={{ height: 220, width: 280 }} />
                    <Box mt={3}>
                        <Typography variant='body1' sx={{ mx: 4 }}>
                            The world wide web contains vast resources of information and services that continue growing rapidly. Though powerful search engines have been developed to aid in locating unfamiliar documents by category, contents, or subject, it is impossible for people to individually classify information contained in millions and millions of web pages. Thus, there is an increasing need for a tool, which can classify web documents into appropriate categories. We have developed <strong>WDACE</strong>, a tool that uses complex deep learning algorithms at its core to automatically classify web documents, extract relevant topics, deliver accurate summaries and related statistics.
                        </Typography>
                    </Box>
                    <Box mt={5} fontSize="h6.fontSize" fontWeight={400} fontFamily="Monospace">
                        This app is built by: <br /> 
                        <Link href="https://github.com/namanshah01" color="inherit" target="_blank" rel="noopener" underline="hover">Naman Shah</Link>, {" "}
                        <Link href="https://github.com/VirajPatidar" color="inherit" target="_blank" rel="noopener" underline="hover">Viraj Patidar</Link>, {" "}
                        <Link href="https://github.com/VedantNakrani" color="inherit" target="_blank" rel="noopener" underline="hover">Vedant Nakrani</Link> {" and "}
                        <Link href="https://github.com/atharvadpatil" color="inherit" target="_blank" rel="noopener" underline="hover">Atharva Patil</Link>
                    </Box>
                    <Box mt={3}>
                        <Link href="https://github.com/VirajPatidar/WDACE-frontend" color="inherit" target="_blank" rel="noopener" underline="hover">
                            <Button
                                variant="outlined"
                                display="inline"
                                color="inherit"
                                startIcon={<GitHubIcon />}
                            >
                                Source Code
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;