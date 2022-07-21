import './CardMovie.scss';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';

export default function DribbbleShot() {
    return (
        <Card
            sx={{
                minWidth: 300,
                bgcolor: 'initial',
                boxShadow: 'none',
                '--Card-padding': '0px',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio="4/3">
                    <figure>
                        <img
                            alt="Yosemite by Casey Horner"
                            width="330"
                            height="247"
                            sizes="338px"
                            data-sizes="auto"
                            data-srcset="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
                            data-src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
                            src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
                            srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&auto=format&fit=crop&w=988"
                        />
                    </figure>
                </AspectRatio>
                <CardCover
                    className="gradient-cover"
                    sx={{
                        '&:hover, &:focus-within': {
                            opacity: 1,
                        },
                        opacity: 0,
                        transition: '0.1s ease-in',
                        background:
                            'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                    }}
                >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <Box>
                        <Box
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1.5,
                                flexGrow: 1,
                                justifyContent: 'space-between',

                            }}
                        >
                            <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                <Link
                                    href="#dribbble-shot"
                                    overlay
                                    underline="none"
                                    sx={{
                                        color: '#fff',
                                        // textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        display: 'block',
                                    }}
                                >
                                    Yosemite
                                </Link>
                            </Typography>
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
                                    Yosemite
                                </Link>
                            </Typography>
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
                                    Yosemite
                                </Link>
                            </Typography>


                            <IconButton size="sm" color="neutral">
                                <Favorite />
                            </IconButton>
                        </Box>
                    </Box>
                </CardCover>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1, mt: 1.5,
                alignItems: 'center',
                m: '0px',


            }}>

                <Link
                    href="#dribbble-shot"
                    level="body3"
                    underline="none"
                    startDecorator={<Favorite />}
                    sx={{
                        fontWeight: 'md',
                        ml: 'auto',
                        color: 'text.secondary',
                        width: '50%',
                        '&:hover': { color: 'danger.plainColor' },
                    }}
                >
                    117
                </Link>
                <Link
                    href="#dribbble-shot"
                    level="body3"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                        width: '50%',
                        fontWeight: 'md',
                        color: 'text.secondary',
                        '&:hover': { color: 'primary.plainColor' },
                    }}
                >
                    10.4k
                </Link>
            </Box>
        </Card>
    );
}
