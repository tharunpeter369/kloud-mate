import { ArrowBack, StackedLineChart, Search, Article, ShareRounded, ClearAll } from '@mui/icons-material'
import { AppBar, Box, Button, Toolbar, Typography, styled, Stack, Grid, InputBase } from '@mui/material'
import React from 'react'

const StyledAppBar = styled(AppBar)({
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderBottom: '1px solid rgb(213, 215, 224)',
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: '0px 14px',
    boxShadow: 'none',

});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
})

const SearchStyle = styled("div")(({ theme }) => ({
    backgroundColor: "red",
    color: "black",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "100%"
}));

const StyledSearchIcon = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    // alignItems: 'center',
    border: '1px solid rgb(213, 215, 224)',
    paddingRight: '10px',
    borderRadius: theme.shape.borderRadius,
    // padding: '5px',
    backgroundColor: 'rgb(237, 244, 255)',
    height: '100%',
    '&:hover': {
        borderColor: 'rgb(0, 161, 253)',
    },
}));

const StyledBoxIconNavbar = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: "4px 13px",
    border: '2px solid rgb(0, 161, 253)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(237, 244, 255)',
    marginRight: '7px',
}));

const StyledSearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px',
    marginLeft: '2px',
    borderRight: '2px solid rgb(213, 215, 224)',
    padding: '5px',
    backgroundColor: 'rgb(237, 244, 255)',

}));

const StyledIconButton = styled(Button)(({ theme }) => ({
    marginRight: '10px',
    minWidth: 0,
    padding: 0,
}));

const IconStack = styled(Stack)(({ theme }) => ({
    direction: "row",
    // alignItems: "center"
}));



function Navbar() {
    return (
        <StyledAppBar position="sticky">
            <StyledToolbar>
                <Grid container alignItems="center" spacing={2}>
                    {/* left  */}
                    <Grid item xs={3}>
                        {/* Content for the LeftStack (25% width) */}
                        <Stack direction={"row"}>
                            <StyledIconButton variant="outlined" color="inherit" size="small">
                                <ArrowBack style={{ color: 'black' }} />
                            </StyledIconButton>
                            <Typography variant="h6" sx={{ color: 'black', fontSize: "17px" }}>
                                <span style={{ color: 'red' }}>DELETE </span>
                                <span style={{ color: 'black' }}>/purchase-order</span>
                            </Typography>
                        </Stack>
                    </Grid>
                    {/* right  */}
                    <Grid container alignItems="center" justifyContent="center" spacing={2} item xs={9}>
                        {/* search  */}
                        <Grid item xs={8}>
                            <Stack direction="row" alignItems="center">
                                <StyledSearchIcon>
                                    <StyledSearchBox>
                                        <Search style={{ color: 'grey', paddingRight: '10px' }} />
                                    </StyledSearchBox>
                                    <InputBase placeholder="search in trace" sx={{ width: '80%' }} />
                                </StyledSearchIcon>
                            </Stack>
                        </Grid>
                        {/* icons  */}
                        <Grid container alignItems="center" justifyContent="center" spacing={2} item xs={4}>
                            <Grid item xs={6}>
                                {/* Content for the LeftStack (25% width) */}
                                <Stack direction={"row"} justifyContent="center">
                                    <span style={{ color: 'rgb(0, 161, 253)' }}>Logs (22)</span>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                {/* Content for the LeftStack (25% width) */}
                                <Stack direction={"row"} justifyContent="space-between">
                                    <StyledBoxIconNavbar>
                                        <Article style={{ color: 'rgb(0, 161, 253)' }} />
                                    </StyledBoxIconNavbar>
                                    <StyledBoxIconNavbar>
                                        <ClearAll style={{ color: 'rgb(0, 161, 253)' }} />
                                    </StyledBoxIconNavbar>
                                    <StyledBoxIconNavbar>
                                        <ShareRounded style={{ color: 'rgb(0, 161, 253)' }} />
                                    </StyledBoxIconNavbar>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Navbar