import React from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Bar, Line } from 'react-chartjs-2'
import constants from '../../constants'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '16px'
    }
}))

export default function PlayerPerformanceDisplay ({ data }) {
    const classes = useStyles()

    if (data === null)
        data = []

    const dataset = {
        labels: data.map((item) => item.date),
        datasets: [
            {
                data: data.map((item) => item.value || 0),
                label: 'Performance',
                ...constants.dataSetsOptions.TENNIS_PERFORMANCE.dataSetOptions,
            }
        ]
    }

    const events = data.map(({ drop_at, date }) => (
        {
            title: drop_at.at_code,
            backgroundColor: constants.DROP_AT[drop_at.at_id],
            borderColor: constants.DROP_AT[drop_at.at_id],
            date,
        }
    ))

    return (
        <>
            <Grid item xs={12} md={6}>
                <Paper elevation={2} className={classes.paper}>
                    <h3>Assistance</h3>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        weekends={false}
                        plugins={[dayGridPlugin]}
                        events={events}
                    />
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={2} className={classes.paper}>
                    <h3>Player progress</h3>
                    <Line data={dataset} options={constants.dataSetsOptions.TENNIS_PERFORMANCE.options}/>
                </Paper>
            </Grid>
        </>
    )
}
