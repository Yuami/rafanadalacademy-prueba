import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CoachList from '../components/Player/CoachList'
import PlayerDisplay from '../components/Player/PlayerDisplay'
import PlayerContext from '../components/Player/PlayerContext'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '16px',
    },
    loader: {
        margin: '200px'
    }
}))

export default function Vision360 () {
    const player = useContext(PlayerContext)
    const classes = useStyles()

    return (
        <Grid container spacing={3} className={classes.container}>
            {player === null
                ? <LinearProgress className={classes.loader}/>
                : <>
                    <CoachList/>
                    <PlayerDisplay/>
                </>
            }
        </Grid>
    )
}
