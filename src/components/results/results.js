import React, { useState, forwardRef } from 'react';
import { results } from '../../atoms';
import { useRecoilValue } from 'recoil';
import { useSearchParams } from 'react-router-dom';
import DomainTopicGraph from './domainTopicGraph';
import BidirectionalSearchGraph from './bidirectionalSearchGraph';


//MUI
import { Box, Container, Paper, Typography, Chip, Grid, Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Iframe from "react-iframe";
import Link from '@mui/material/Link';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const lightbg = cyan[50];


const Results = () => {

    const result = useRecoilValue(results);

    const chipData = result.keywords;

    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");

    const [value, setValue] = React.useState('1');
    const [open, setOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const [iframeLink, setIframeLink] = useState("");

    const webPreviewURL = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&waitUntil=networkidle2&meta=false&embed=screenshot.url`

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLightHouseClickOpen = (url) => {
        const encodedURL = `?url=${encodeURIComponent(url)}`
        const lightHouseUrl = `https://lighthouse.microlink.io/?url=` + encodeURIComponent(`https://api.microlink.io/${encodedURL}&meta=false&insights=true`)

        console.log(lightHouseUrl);

        setOpen(true);
        setModalHeader('Lighthouse Audit Report');
        setIframeLink(lightHouseUrl);
    };

    const handleClickOpen = (url) => {
        url = url.replace("://", "/")
        const encodedURL = encodeURIComponent(url)
        const sucuriUrl = `https://api.microlink.io?url=https%3A%2F%2Fsitecheck.sucuri.net%2Fresults%2F${encodedURL}&pdf=true&waitUntil=networkidle0&meta=false&embed=pdf.url`

        console.log(sucuriUrl);

        setOpen(true);
        setModalHeader("Security Report");
        setIframeLink(sucuriUrl);
    };

    const handleClose = () => {
        setOpen(false);
        setModalHeader("");
        setIframeLink("");
    };

    // var LbL2VecDomain = [
    //     'E-Commerce',
    //     'News',
    //     'Blogs and Educational',
    //     'Business website/Gaming or Others',
    //     'Social Media and Entertainment'
    // ];
    // var main_domain = LbL2VecDomain[Math.floor(Math.random() * LbL2VecDomain.length)];


    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h4">
                    {result.LbLDomain}
                </Typography>
                <Typography variant="h6">
                    {result.textual_data.title}
                </Typography>
            </Box>
            <Box pt={3} pb={1} sx={{ width: '100%', typography: 'body1' }}>
                <Paper style={{ backgroundColor: lightbg }} elevation={3}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Extractive Summary" value="1" />
                                <Tab label="Main Text" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">{result.textual_data.extractive_summary}</TabPanel>
                        <TabPanel value="2">{result.textual_data.mainText}</TabPanel>
                    </TabContext>
                </Paper>
            </Box>

            <Box pt={2} pb={1} sx={{ display: "flex", flexDirection: "row" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ textAlign: "center" }} >
                            <Paper style={{ backgroundColor: lightbg, height: 355 }} elevation={3}>
                                <Typography pt={1} variant="h6" color="primary">Domain Topic Graph</Typography>
                                <DomainTopicGraph domain={result.domain} topics={result.topics} />
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ textAlign: "center" }} >
                            <Paper style={{ backgroundColor: lightbg, height: 355 }} elevation={3}>
                                <Typography pt={1} variant="h6" color="primary">Bidirectional Search Graph</Typography>
                                <BidirectionalSearchGraph domain={result.domain} child_nodes={result.children_nodes} parent_nodes={result.parent_nodes} />
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box pt={2} pb={1} sx={{ display: "flex", flexDirection: "row" }}>
                <Grid container spacing={3} alignItems="stretch">
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ textAlign: "center", height: '100%' }} >
                            <Paper style={{ backgroundColor: lightbg, paddingBottom: '8px', height: '100%' }} elevation={3}>
                                <Typography pt={1} variant="h6" color="primary">Web Preview</Typography>
                                <a href={url} target="_blank" rel="noreferrer">
                                    <img src={webPreviewURL} style={{ height: '90%', width: '90%', objectFit: 'contain' }} loading="lazy" alt="Web Preview"></img>
                                </a>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ textAlign: "center", height: '100%' }} >
                            <Paper sx={{ backgroundColor: lightbg, height: '100%', paddingBottom: '8px' }} elevation={3} alignItems="stretch">
                                <Typography pt={1} variant="h6" color="primary">Performace and Audit Reports</Typography>
                                <Box ml={2} p={2} sx={{ textAlign: "left" }}>
                                    <strong>Response Time:</strong> {result.current_status.time_taken} <br />
                                    <strong>Response Status Code:</strong> {result.current_status.status_code} <br />
                                    <strong>Response Status Text:</strong> {result.current_status.status_text} <br />
                                    <strong>Content Length:</strong> {result.current_status.content_length} <br />
                                    <strong>Content Type:</strong> {result.current_status.content_type} <br />
                                </Box>
                                {result.similar_urls.length > 0 &&
                                    <Box ml={4} mr={4} sx={{textAlign: "left", overflow: "auto", height: "150px"}}>
                                        <strong>Similar URLs:</strong> <br />
                                        {result.similar_urls.map((u, i) => {
                                            return (
                                                <>
                                                    {i + 1}{`) `}
                                                    <Link href={u} target="_blank" rel="noopener" underline="hover">
                                                        {u} <br />
                                                    </Link>
                                                </>
                                            );
                                        })}
                                    </Box>
                                }
                                <Box mt={3}>
                                    <Button
                                        sx={{ textTransform: 'none' }}
                                        variant="outlined"
                                        onClick={() =>
                                            handleLightHouseClickOpen(url)
                                        }
                                    >
                                        Get Lighthouse Report
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        sx={{ textTransform: 'none' }}
                                        variant="outlined"
                                        onClick={() =>
                                            handleClickOpen(url)
                                        }
                                    >
                                        Get Security Report
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box pt={2} pb={1} sx={{ textAlign: "center" }}>
                <Paper style={{ backgroundColor: lightbg }} elevation={3}>
                    <Box><Typography pt={1} variant="h6" color="primary">Keywords &amp; Important Phrases</Typography></Box>
                    <Paper
                        elevation={0}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            m: 0,
                        }}
                        component="ul"
                        style={{ backgroundColor: lightbg }}

                    >

                        {chipData.map((data, index) => {

                            return (
                                <ListItem key={index}>
                                    <Chip label={data} color="primary" />
                                </ListItem>
                            );
                        })}
                    </Paper>
                </Paper>
            </Box>

            <Box pt={2} pb={1} sx={{ display: "flex", flexDirection: "row" }}>
                <Grid container spacing={3}>
                    {result.original_lang !== 'English' ?
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ textAlign: "center" }} >
                                <Paper style={{ backgroundColor: lightbg, maxHeight: 300, overflow: "auto" }} elevation={3}>
                                    <Typography pt={1} variant="h6" color="primary">Raw Web Content ({result.original_lang})</Typography>
                                    <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                        {result.textual_data.rawOriginalText}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={12}>
                            <Box sx={{ textAlign: "center" }} >
                                <Paper style={{ backgroundColor: lightbg, maxHeight: 300, overflow: "auto" }} elevation={3}>
                                    <Typography pt={1} variant="h6" color="primary">Raw Web Content</Typography>
                                    <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                        {result.textual_data.rawOriginalText}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                    }
                    {result.original_lang !== 'English' ?
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ textAlign: "center" }} >
                                <Paper style={{ backgroundColor: lightbg, maxHeight: 300, overflow: "auto" }} elevation={3}>
                                    <Typography pt={1} variant="h6" color="primary">Translated Web Content</Typography>
                                    <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                        {result.textual_data.rawText}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        : null}
                </Grid>
            </Box>

            <Box pt={2} pb={4} sx={{ textAlign: "center" }}>
                <Paper style={{ backgroundColor: lightbg }} elevation={3}>
                    <Typography pt={1} variant="h6" color="primary">Text Properties</Typography>
                    <Typography px={2} sx={{ textAlign: "left" }}>
                        Raw Web Content Length: {result.len.rawOriginalText_len}
                    </Typography>
                    {result.original_lang !== 'English' ?
                        <Typography px={2} sx={{ textAlign: "left" }}>
                            Translated Web Content Length: {result.len.rawText_len}
                        </Typography>
                        : null}
                    <Typography px={2} sx={{ textAlign: "left" }}>
                        Main Text Length: {result.len.mainText_len}
                    </Typography>
                    <Typography px={2} pb={2} sx={{ textAlign: "left" }}>
                        Extractive Summary Length: {result.len.extractive_summary_len}
                    </Typography>
                </Paper>
            </Box>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            {modalHeader}
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Iframe
                    url={iframeLink}
                    width="100%"
                    height="4500px"
                    scrolling="yes"
                    loading="lazy"
                />
            </Dialog>

            {/* <Box>
                <pre>{JSON.stringify(result.len, null, 4)}</pre>
                <br />
                {JSON.stringify(result.text)}
            </Box> */}
        </Container >
    );
}

export default Results;