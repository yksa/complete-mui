import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';
import { NotificationsNone, ChatBubbleOutline, PowerSettingsNew, Search } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: 0.6,
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    }
});

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase className={classes.searchInput} placeholder='Search Topics' startAdornment={<Search fontSize='small' />} />
                    </Grid>
                    <Grid item sm />
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'><NotificationsNone fontSize='small' /></Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color='primary'><ChatBubbleOutline fontSize='small' /></Badge>
                        </IconButton>
                        <IconButton><PowerSettingsNew /></IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
