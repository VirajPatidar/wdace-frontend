import React from 'react';
import { results } from '../atoms';
import { useRecoilValue } from 'recoil';

//MUI
import { Box } from '@mui/material';


const Results = () => {

    const result = useRecoilValue(results)

    return (
        <Box>
            <pre>{JSON.stringify(result.len, null, 4)}</pre>
            <br />
            {JSON.stringify(result.text.text)}
            <br />
            <br />
            {JSON.stringify(result.keywords)}
            <br />
            <br />
            {JSON.stringify(result.original_lang)}
            <br />
            <br />
            {JSON.stringify(result.text.translated_text)}
            <br />
            <br />
            {JSON.stringify(result.text.extractive_summary)}
        </Box>
    );
}

export default Results;