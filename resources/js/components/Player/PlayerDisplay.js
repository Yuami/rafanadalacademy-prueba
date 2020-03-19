import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import PlayerContext from './PlayerContext'
import { makeStyles } from '@material-ui/core/styles'
import PlayerCompare from './PlayerCompare/PlayerCompare'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: '16px',
        padding: theme.spacing(2),
        display: 'flex',
    },
    avatar: {
        marginRight: '10px'
    },
    countryFlag: {
        marginLeft: 'auto'
    }
}))

export default function PlayerDisplay () {
    const classes = useStyles()
    const data = useContext(PlayerContext)

    return (
        <Grid item xs={12}>
            <Paper elevation={2} className={classes.paper}>
                <Grid container>
                    <Avatar alt={data.player.name} src={data.player.photo_url} className={classes.avatar}/>
                    <Typography variant="h5" component="h2">
                        {data.player.fullname || 'Player Name'}
                    </Typography>
                    <img src={data.country.flags.flat['48']} className={classes.countryFlag}/>
                    <Grid container item spacing={2}>
                        <PlayerCompare/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
