import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Sidebar from './Sidebar'
import CssBaseline from '@material-ui/core/CssBaseline'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

export default function MainLayout ({headerContent, handlePlayer, children }) {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const props = { closeDrawer: handleDrawerClose, openDrawer: handleDrawerOpen, handlePlayer, open }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header {...props} content={headerContent}/>
            <Sidebar {...props}/>
            <main
                className={clsx(classes.content, { [classes.contentShift]: open, })}>
                {children}
            </main>
        </div>
    )
}
