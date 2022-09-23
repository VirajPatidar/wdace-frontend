import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { results } from '../atoms';
import { useSetRecoilState } from 'recoil';

//MUI
import Box from '@mui/material/Box';
import { Grid, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';



const Summarize = () => {

    const navigate = useNavigate();

    // const [file, setFile] = useState([])
    // const [fileError, setFileError] = useState(false)

    const [URL, setURL] = useState("")
    const [URLError, setURLError] = useState(false)

    const [loading, setLoading] = useState(false)
    const setResult = useSetRecoilState(results)


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
            // if (file.length > 0) {
            //     form_data.append('name', file[0].name);
            //     form_data.append('file', file[0]);
            // }
            setLoading(true);
            axios.post(`http://localhost:8000/api/test`, form_data)
                .then((res) => {
                    setLoading(false);
                    console.log(res);
                    setResult(res.data);
                    navigate("/results");
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    alert("An error occured! Please try again.")
                });
        }
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
                    {/* <Box mt={3}>
                        <ThemeProvider theme={theme}>
                            <FileUpload
                                required
                                value={file}
                                onChange={setFile}
                                buttonText="Upload .txt file"
                                title="Drag 'n' Drop or select a text file"
                                sx={fileError ? { borderColor: "red" } : ""}
                            />
                        </ThemeProvider>
                    </Box> */}
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
        </>
    );
}

export default Summarize;