import React from 'react'
import './Text.scss'
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
export default function Text({ text }) {
    return (
        <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
            <Link
                href="#dribbble-shot"
                overlay
                underline="none"
                sx={{
                    color: '#fff',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: 'block',
                }}
            >
                {text}
            </Link>
        </Typography>
    )
}
