import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { results } from '../atoms';
import { useRecoilState } from 'recoil';


//MUI
import Box from '@mui/material/Box';
import { Grid, TextField, Typography, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { cyan } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';


const theme = createTheme({
    palette: {
        primary: {
            main: cyan[100],
        },
    },
});


const Classify = () => {

    const lightbg = cyan[50];

    const navigate = useNavigate();

    const [URL, setURL] = useState("")
    const [URLError, setURLError] = useState(false)

    const [loading, setLoading] = useState(false)
    const [result, setResult] = useRecoilState(results)

    const [open, setOpen] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleSubmit = e => {
        e.preventDefault();

        let submit = true;
        setURLError(false);

        // eslint-disable-next-line
        var URLRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

        if ((URL === "") || !(URLRegex.test(URL))) {
            submit = false;
            setURLError(true);
        }

        if (submit) {
            setResult({});
            let form_data = new FormData();
            if (URL !== "") {
                form_data.append('url', URL);
            }

            setLoading(true);
            axios.post(`http://localhost:8000/api/classify`, form_data)
                .then((res) => {
                    setLoading(false);
                    console.log(res);
                    setResult(res.data);
                    if (res.data.original_lang !== 'English')
                        handleOpen();
                    else
                        navigate("/results");
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    alert("An error occured! Please try again.")
                });
        }
    }


    const goToResults = () => {
        navigate("/results");
    }


    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={8} md={5} mt={8} p={2}>
                    <Typography variant="h6" textAlign="center">
                        Classify and Analyze a Webpage
                    </Typography>
                    <Box mt={1}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="url"
                            label="Enter URL"
                            id="url"
                            error={URLError}
                            onChange={(e) => setURL(e.target.value)}
                        />
                    </Box>
                    <Box mt={3}>
                        <LoadingButton
                            loading={loading}
                            loadingIndicator="Processing..."
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                            color="primary"
                            sx={{ width: '100%' }}
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                </Grid>
            </Grid>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <Box m={2}>
                    <Typography sx={{ textAlign: "center" }}>The input text has been translated from <b>{result?.original_lang}</b> to <b>English</b>.</Typography>
                    <Box mt={3} sx={{ display: "flex", flexDirection: "row" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ textAlign: "center" }} style={{ width: "100%" }} >
                                    <Paper style={{ backgroundColor: lightbg, maxHeight: '80%', overflow: "auto" }}>
                                        <Typography pt={1} variant="h6" color="primary">Raw Web Content ({result?.original_lang})</Typography>
                                        <Typography px={2} py={2} sx={{ textAlign: "justify", maxHeight: 400, overflow: "auto" }}>
                                            {result?.textual_data?.rawOriginalText}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ textAlign: "center" }} style={{ width: "100%" }}>
                                    <Paper style={{ backgroundColor: lightbg, maxHeight: '80%', overflow: "auto" }}>
                                        <Typography pt={1} variant="h6" color="primary">Translated Content (English)</Typography>
                                        <Typography px={2} py={2} sx={{ textAlign: "justify", maxHeight: 400, overflow: "auto" }} >
                                            {result?.textual_data?.rawText}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={3}>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={goToResults}
                            color="primary"
                            sx={{ width: '100%' }}
                        >
                            Procced to View Full Report
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}

export default Classify;