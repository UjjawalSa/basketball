import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Box, InputBase } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div className='container p-2'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img src='data:image/png;base64, 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' alt='' width='401' height='64' />
                            </div>

                            <div className='pt-3 display_in_mobile'>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </div>

                            <div className='pt-3 hover_handle'>
                                <AccountCircle onClick={()=>alert("Can't Login Right Now !....")} />
                            </div>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));