import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import './Pagination.scss';
export default function BasicPagination({ handlePageChange }) {
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        handlePageChange(value);
    };



    return (
        <div className='kPagination'>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={500} page={page} onChange={handleChange} />
            </Stack>
        </div>
    );
}
