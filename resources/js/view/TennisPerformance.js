import React, { useContext, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import PlayerContext from '../components/Player/PlayerContext'
import makeStyles from '@material-ui/core/styles/makeStyles'
import LinearProgress from '@material-ui/core/LinearProgress'
import PlayerPerformanceDisplay from '../components/Player/PlayerPerformanceDisplay'
import api from '../api'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '32px',
    },
    loader: {
        margin: '200px'
    }
}))

export default function Vision360 () {
    const [tennis, setTennis] = useState(null)
    const data = useContext(PlayerContext)
    const classes = useStyles()

    useEffect(() => {
        if (!!data?.player) {
            api.fetchPlayerTennis(data.player).then(tennis => setTennis(tennis.data))
        }
    }, [data])

    return (
        <Grid container spacing={3} className={classes.container}>
            {data === null
                ? <LinearProgress className={classes.loader}/>
                : <PlayerPerformanceDisplay data={tennis}/>
            }
        </Grid>
    )
}
