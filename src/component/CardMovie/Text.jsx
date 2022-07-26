import React from 'react'
import './Text.scss'
import Typography from '@mui/joy/Typography';
export default function Text({ text }) {
    return (
        <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
            {text}
        </Typography>
    )
}
