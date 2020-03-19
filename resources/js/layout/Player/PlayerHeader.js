import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex'
    },
    formControl: {
        minWidth: 120,
        margin: '0px !important',
    },
}))

export default function PlayerHeader ({ value, handleChange, handleID }) {
    const classes = useStyles()

    return (
        <div className={classes.header}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="Player" id={handleID(0)}/>
                <Tab label="Tennis Performance" id={handleID(1)}/>
            </Tabs>
        </div>
    )
}
