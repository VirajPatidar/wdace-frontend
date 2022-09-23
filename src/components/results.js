import React from 'react';
import { results } from '../atoms';
import { useRecoilValue } from 'recoil';

//MUI
import { Box } from '@mui/material';


const Results = () => {

    const result = useRecoilValue(results)

    return (
        <Box>
            {JSON.stringify(result)}
        </Box>
    );
}

export default Results;