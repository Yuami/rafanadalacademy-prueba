import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Select } from '@material-ui/core'
import PlayerContext from '../../components/Player/PlayerContext'
import MenuItem from '@material-ui/core/MenuItem'
import api from '../../api'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        marginLeft: 'auto',
    },
}))

export default function PlayerHeader ({ handlePlayer }) {
    const [players, setPlayers] = useState([])
    const classes = useStyles()
    const player = useContext(PlayerContext)

    const playerSelectString = (player) => `#(${player.id}) ${player.fullname}`

    useEffect(() => {
        api.getPlayers().then(response => setPlayers(response.data))
    }, [])

    const value = player !== null ? player.player.fullname : ''

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="player-select">Select Player</InputLabel>
            <Select
                onChange={handlePlayer}
                autoWidth
                label={value}
            >
                {
                    players.map((player =>
                            <MenuItem key={`${player.id}-${player.fullname}`} value={player}>
                                {playerSelectString(player)}
                            </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}
