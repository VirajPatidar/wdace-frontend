import React from 'react';
import { results } from '../atoms';
import { useRecoilValue } from 'recoil';

//MUI
import { Box } from '@mui/material';


const Results = () => {

    const result = useRecoilValue(results)

    return (
        <Box>
            <Box>
                <b>Stats</b> <br />
                <pre>{JSON.stringify(result.len, null, 4)}</pre>
            </Box>
            <Box mt={5}>
                <b>Keywords</b> <br />
                <pre>{JSON.stringify(result.keywords, null, 4)}</pre>
            </Box>
            <Box mt={5}>
                <b>Original Language</b> <br />
                {result.original_lang}
            </Box>
            <Box mt={5}>
                <b>Title</b> <br />
                {result.textual_data.title}
            </Box>
            <Box mt={5}>
                <b>Main Text</b> <br />
                {result.textual_data.mainText}
            </Box>
            <Box mt={5}>
                <b>Extractive Summary</b> <br />
                {result.textual_data.extractive_summary}
            </Box>
            <Box mt={5}>
                <b>Raw Text</b> <br />
                {result.textual_data.rawText}
            </Box>
        </Box>
    );
}

export default Results;