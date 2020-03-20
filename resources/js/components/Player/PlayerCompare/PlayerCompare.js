import React, { useContext, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import PlayerCompareItem from './PlayerCompareItem'
import api from '../../../api'
import constants from '../../../constants'
import { v4 } from 'uuid'
import PlayerContext from '../PlayerContext'

export default function PlayerCompare () {
    const [genderData, setGenderData] = useState(null)
    const [handData, setHandData] = useState(null)
    const [ageData, setAgeData] = useState(null)

    const {player} = useContext(PlayerContext)

    const normalizeData = (data) => {
        if (data === null) {
            return data
        }
        return { labels: Object.keys(data), dataset: Object.values(data) }
    }

    useEffect(() => {
        api.comparePlayersData(constants.compare.GENDER).then(({ data }) => setGenderData(data))
        api.comparePlayersData(constants.compare.HAND).then(({ data }) => setHandData(data))
        api.comparePlayersData(constants.compare.AGE).then(({data}) => setAgeData(data))
    }, [])

    const genderText = () => {
        return `Player gender: ${constants.gender[player.gender.toUpperCase()]}`
    }

    const handText = () => {
        return `Player hand: ${constants.handed[player.handed.toUpperCase()]}`
    }

    const ageText = () => {
        return `Player born: ${player.birthdate} (${player.age})`
    }

    const data = [
        { title: 'Gender', text: genderText(), ...normalizeData(genderData) },
        { title: 'Handed', text: handText(), ...normalizeData(handData) },
        { title: 'Age', text: ageText(), ...normalizeData(ageData) },
    ]

    return (data.map(data =>
        <Grid item xs={12} md={4} key={v4()}>
            <PlayerCompareItem {...data}/>
        </Grid>
    ))
}
