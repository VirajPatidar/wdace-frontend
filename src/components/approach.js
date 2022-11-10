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
                            <Box>
                                <Typography variant='h5' gutterBottom>
                                    Web Document Classification
                                </Typography>
                                <Typography variant='body1'>
                                    Web document classification is the process of assigning a Web documents to one or more predefined categories which plays a vital role in focused crawling, assisted development of Web directories, topic-specific Web link analysis, contextual advertising, and analysis of the Web's topical structure.
                                </Typography>
                            </Box>
                            <Box pt={4}>
                                <Typography variant='h6'>
                                    1. Knowledge Graph:
                                </Typography>
                                <Typography variant='body1'>
                                    A knowledge graph, also known as a semantic network, represents a network of real-world entities—i.e. objects, events, situations, or concepts—and illustrates the relationship between them. Knowledge Graphs provide a model of how everything is related, having each subject or object represented only once with all its relationships, in the context of all of the other subjects and their relationships. This makes it possible to see how everything is related at a big picture level.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant='body1'>
                                    APPROACH:
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Extract Text from HTML document." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Clean, process and translate the text to english." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Pass the cleaned text to YAKE alogorithm to get topics and domain" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Use topics and domain to create nodes in neo4j and create relation between domain and topics." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Store all unique urls in the created node." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Query neo4j to get similar web document links." />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box pt={4}>
                                <Typography variant='h6'>
                                    2. Lbl2Vec:
                                </Typography>
                                <Typography variant='body1'>
                                    Lbl2Vec is an algorithm for unsupervised document classification and unsupervised document retrieval. It automatically generates jointly embedded label, document and word vectors and returns documents of categories modeled by manually predefined keywords.
                                </Typography>

                            </Box>
                            <Box pt={2}>
                                <Typography variant='body1'>
                                    The key idea of the algorithm is that many semantically similar keywords can represent a topic. In the first step, the algorithm creates a joint embedding of document and word vectors. Once documents and words are embedded in a vector space, the goal of the algorithm is to learn label vectors from previously manually defined keywords representing a topic. Finally, the algorithm can predict the affiliation of documents to topics from document vector - label vector similarities.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography variant='body1'>
                                    ALGORITHM:
                                </Typography>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Use the manually defined keywords for each topic of interest." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Create jointly embedded document and word vectors using Doc2Vec." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Find document vectors that are similar to the keyword vectors of each topic." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Clean outlier document vectors for each topic." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Compute the centroid of the outlier cleaned document vectors as label vector for each topic." />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Compute label vector <-> document vector similarities for each label vector and document vector in the dataset." />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box pt={2}>
                                <Typography variant='body1'>
                                    We Scraped 5 X 500 = 2500 websites using the scripts and ran the Lbl2vec model to classify the website into following 5 major categories.
                                </Typography>
                            </Box>
                            <Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="E-Commerce" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="News" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Blogs + Educational" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Business website (not ecommerce) + Gaming + Others" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Social Media and Entertainment" />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box mt={6}>
                                <Typography variant='h5'>
                                    Technologies Used:
                                </Typography>
                            </Box>
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