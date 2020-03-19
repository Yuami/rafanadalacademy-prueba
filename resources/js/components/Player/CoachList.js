import React, { useContext } from 'react'
import PlayerContext from './PlayerContext'
import UserPanel from './UserPanel'
import Grid from '@material-ui/core/Grid'
import { v4 } from 'uuid'

export default function CoachList () {
    const player = useContext(PlayerContext)
    const { coach, teacher, fitness, guardian } = player
    const trainers = [
        { user: coach, type: 'Coach' },
        { user: teacher, type: 'Teacher' },
        { user: fitness, type: 'Fitness coach' },
        { user: guardian, type: 'Guardian' },
    ]

    return trainers.map(({user, type}, i) =>
        <Grid item xs={12} sm={6} md={3} key={v4()}>
            <UserPanel user={user} type={type}/>
        </Grid>
    )
}
