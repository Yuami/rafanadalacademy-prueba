import React from 'react'
import ReactDOM from 'react-dom'
import api from '../api'
import PlayerHeader from '../layout/Player/PlayerHeader'
import PlayerContext from './Player/PlayerContext'
import MainLayout from '../layout/MainLayout'
import TabPanel from './TabPanel'
import Vision360 from '../view/Vision360'
import TennisPerformance from '../view/TennisPerformance'

function App () {
    const [tab, setTab] = React.useState(0)
    const [player, setPlayer] = React.useState(null)

    const handlePlayer = (event) => {
        const player = event.target.value
        api.fetchPlayerData(player).then(player => setPlayer(player))
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

export default App

const app = document.getElementById('app')
ReactDOM.render(<App/>, app)

