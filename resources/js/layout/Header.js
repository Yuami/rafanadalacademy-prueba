import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import consts from '../constants'
import PlayerSelect from '../components/Player/PlayerSelect'

const drawerWidth = consts.DRAWER_WIDTH

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}))

function Header ({ openDrawer, open, content, handlePlayer }) {
    const classes = useStyles()

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, { [classes.appBarShift]: open })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={openDrawer}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                {content}
                <PlayerSelect handlePlayer={handlePlayer}/>
            </Toolbar>
        </AppBar>
    )

}

export default Header
