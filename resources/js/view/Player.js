import React from 'react'
import MainLayout from '../layout/MainLayout'
import PlayerHeader from '../layout/Player/PlayerHeader'
import TabPanel from '../components/TabPanel'
import Vision360 from './Vision360'
import TennisPerformance from './TennisPerformance'
import PlayerContext from '../components/Player/PlayerContext'
import api from '../api'

function Player () {
    const [tab, setTab] = React.useState(0)
    const [player, setPlayer] = React.useState(null)
    console.log(player)

    const handlePlayer = (event) => {
        const player = event.target.value
        api.getPlayerData(player).then(player => setPlayer(player))
    }

    const handleChangeTab = (event, newTab) => {
        setTab(newTab)
    }

    const handleID = index => {
        return `player-tab-${index}`
    }

    const props = { handleID, value: tab }
    const header = <PlayerHeader handleID={handleID}
                                 handleChange={handleChangeTab}
                                 value={tab}/>

    return (
        <PlayerContext.Provider value={player}>
            <MainLayout handlePlayer={handlePlayer} headerContent={header}>
                <TabPanel {...props} index={0}>
                    <Vision360/>
                </TabPanel>
                <TabPanel {...props} index={1}>
                    <TennisPerformance/>
                </TabPanel>
            </MainLayout>
        </PlayerContext.Provider>
    )
}

export default Player
