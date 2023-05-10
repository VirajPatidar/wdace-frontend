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
                    <Box mt={5} mb={4} pt={3} pb={3} pl={4} pr={4} style={{ backgroundColor: "#e0f7fa", borderRadius: "20px" }}>
                        <Box justifyContent="flex-start" mb={2}>
                            <Typography variant='h5' gutterBottom>
                                Web Document Analyzer and Classification Engine (WebDACE)
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant='body1'>
                                WebDACE can analyze and classify unidentified web documents. The app provides the following features:
                            </Typography>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Domain - Topic Modeling" secondary="Categorizes unlabelled Web Document to a specific Domain" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Keyword and Topics Extraction" secondary="Extract the most important keywords and related topics that define the web document provided" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Knowledge Graph" secondary="Provide graphical repesentation of Domains and related Topics" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Similar Documents" secondary="Provide links to web documents based on similar domain and topics" />
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
                                    <ListItemText primary="Performance and Audit Report" secondary="Provides Performance and Audit Report for a provides web document using lighthouse" />
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
                                    <ListItemText primary="Metadata" secondary="Provides matadata of the web document e.g. Language, document size and document metadata." />
                                </ListItem>
                            </List>
                        </Box>
                        <Box mt={7} >
                            <Box>
                                <Typography variant='h5'>
                                    WebDACE Model Diagram
                                </Typography>
                            </Box>
                            <Box pt={2} sx={{ textAlign: 'center' }}>
                                <img src={modelDiagram} alt="banner" style={{ height: '50%', maxWidth: '900px', width: '100%' }} />
                            </Box>
                        </Box>
                        <Box mt={9}>
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
                                <Box ml={3}>
                                    <Typography variant='body1'>
                                        A knowledge graph, also known as a semantic network, represents a network of real-world entities—i.e. objects, events, situations, or concepts—and illustrates the relationship between them. Knowledge Graphs provide a model of how everything is related, having each subject or object represented only once with all its relationships, in the context of all of the other subjects and their relationships. This makes it possible to see how everything is related at a big picture level.
                                    </Typography>
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
                                                <ListItemText primary="Clean, process and translate the text to english" />
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
                                                <ListItemText primary="Use topics and domain to create nodes in Neo4j and establish relation between domain and topics" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Store all unique URLs in the created node" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Query Neo4j to get similar web document links" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>
                            <Box pt={4}>
                                <Typography variant='h6'>
                                    2. LDA:
                                </Typography>
                                <Box ml={3}>
                                    <Typography variant='body1'>
                                        The Latent Dirichlet allocation (LDA) is a Bayesian probabilistic model of text documents that determines sets of observations from unobserved groups. Hence, Topic Modelling using LDA is for discovering the abstract “topics” that occur in a collection of documents. The goal of the LDA algorithm is to discover these underlying topics from the corpus and assign each document a probability distribution over these topics. This probability distribution can then be used to classify the document into a particular domain or topic.
                                    </Typography>
                                    <Box pt={2}>
                                        <Typography variant='body1'>
                                            This technique becomes convenient to use because it does not require labelled data for training purposes, it automatically learns the topics from input documents. LDA has been shown to be effective in domain classification tasks, as it can capture the latent structure of the text data and discover meaningful patterns that can be used for classification.
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
                                                <ListItemText primary="Build the Document-Term Matrix: Create a document-term matrix (DTM) which represents the occurrence of each term in each document" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Parameter Tuning: Determine the number of topics (k) and other hyperparameters of the LDA model such as alpha and beta. These parameters need to be set appropriately to ensure that the model accurately represents the underlying data" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Fit the LDA Model: Fit the LDA model using an algorithm like Gibbs Sampling or Variational Bayes. This will generate a set of topic-word and document-topic distributions" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Interpret Topics: Interpret the generated topics by examining the top N most probable words associated with each topic. The top words can provide insights into the topics and their associated documents" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Evaluate Model: Evaluate the LDA model using metrics like coherence score, perplexity, or topic uniqueness" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Topic Labelling: Assign labels to each topic based on the top words and the domain knowledge" />
                                            </ListItem>
                                        </List>
                                    </Box>

                                    <Box pt={2}>
                                        <Typography variant='body1'>
                                            The LDA model was trained with over 120000 text documents to classify the input webpage into the following 4 categories:
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Science and Technology" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Sports" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="World" />
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <ArrowRightIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Business" />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
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