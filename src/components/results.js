// import React from 'react';
// import { results } from '../atoms';
// import { useRecoilValue } from 'recoil';

// //MUI
// import { Box } from '@mui/material';


// const Results = () => {

//     const result = useRecoilValue(results)

//     return (
//         <Box>
//             <Box>
//                 <b>Stats</b> <br />
//                 <pre>{JSON.stringify(result.len, null, 4)}</pre>
//             </Box>
//             <Box mt={5}>
//                 <b>Keywords</b> <br />
//                 <pre>{JSON.stringify(result.keywords, null, 4)}</pre>
//             </Box>
//             <Box mt={5}>
//                 <b>Original Language</b> <br />
//                 {result.original_lang}
//             </Box>
//             <Box mt={5}>
//                 <b>Title</b> <br />
//                 {result.textual_data.title}
//             </Box>
//             <Box mt={5}>
//                 <b>Main Text</b> <br />
//                 {result.textual_data.mainText}
//             </Box>
//             <Box mt={5}>
//                 <b>Extractive Summary</b> <br />
//                 {result.textual_data.extractive_summary}
//             </Box>
//             <Box mt={5}>
//                 <b>Raw Text</b> <br />
//                 {result.textual_data.rawText}
//             </Box>
//         </Box>
//     );
// }

// export default Results;

import React from 'react';
import { results } from '../atoms';
import { useRecoilValue } from 'recoil';

//MUI
import { Box, Container, Paper, Typography, Chip, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const lightbg = cyan[50];


const Results = () => {

    const result = useRecoilValue(results);

    const chipData = result.keywords;


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Container>
            <Box pt={3} pb={3} sx={{ width: '100%', typography: 'body1' }}>
                <Paper style={{ backgroundColor: lightbg }}>
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


            <Paper style={{ backgroundColor: lightbg }}>
                <Box pt={2} pb={2} sx={{ textAlign: "center" }}>
                    <Box><Typography variant="h6" color="primary">Keywords &amp; Important Phrases</Typography></Box>
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
                </Box>
            </Paper>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid container spacing={4}>
                    {result.original_lang !== 'English' ?
                        <Grid item xs={12} sm={12} md={6}>
                            <Box pt={3} pb={3} sx={{ textAlign: "center" }} >
                                <Paper style={{ backgroundColor: lightbg, maxHeight: 300, overflow: "auto" }}>
                                    <Typography pt={1} variant="h6" color="primary">Raw Web Content ({result.original_lang})</Typography>
                                    <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                        {result.textual_data.rawOriginalText}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        :
                        <Grid item xs={12} sm={12} md={12}>
                            <Box pt={3} pb={3} sx={{ textAlign: "center" }} >
                                <Paper style={{ backgroundColor: lightbg, maxHeight: 300, overflow: "auto" }}>
                                    <Typography pt={1} variant="h6" color="primary">Raw Web Content ({result.original_lang})</Typography>
                                    <Typography px={2} py={2} sx={{ textAlign: "left" }}>
                                        {result.textual_data.rawOriginalText}
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                    }
                    {result.original_lang !== 'English' ?
                        <Grid item xs={12} sm={12} md={6}>
                            <Box pt={3} pb={3} sx={{ textAlign: "center" }} >
                                <Paper style={{ backgroundColor: lightbg, maxHeight: 300, overflow: "auto" }}>
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

            <Box pt={3} pb={3} sx={{ textAlign: "center" }}>
                <Paper style={{ backgroundColor: lightbg }}>
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

            {/* <Box>
                <pre>{JSON.stringify(result.len, null, 4)}</pre>
                <br />
                {JSON.stringify(result.text)}
            </Box> */}
        </Container >
    );
}

export default Results;