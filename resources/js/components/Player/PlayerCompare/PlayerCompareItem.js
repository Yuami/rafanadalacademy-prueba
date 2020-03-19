import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Doughnut } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid'
import constants from '../../../constants'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: '16px',
        padding: theme.spacing(2),
        display: 'flex',
    },
    title: {}
}))

export default function PlayerCompare ({ title, text, labels, dataset }) {
    const classes = useStyles()

    const data = {
        labels: labels,
        datasets: [{
            data: dataset,
            backgroundColor: [
                constants.colors.TENNIS_BALL,
                constants.colors.MOVISTAR,
                constants.colors.FAST_TRACK,
            ]
        }]
    }

    return (
        <Paper elevation={2} className={classes.paper}>
            <Grid container direction={'column'}>
                <h2 className={classes.title}>{title}</h2>
                <p>{text || ' '}</p>
                <Doughnut data={data}/>
            </Grid>
        </Paper>
    )
}
