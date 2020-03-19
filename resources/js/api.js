import constants from './constants'

const { API_URL } = constants.api

const getPlayers = async () => {
    return axios(`${API_URL}/players`)
}

const getPlayer = async (player) => {
    const id = player?.id ? player.id : player

    return axios(`${API_URL}/players/${id}/classification`)
}

const getCountry = async (doc_country) => {
    return axios(`${API_URL}/countries/${doc_country}`)
}

const getPlayerData = async (player) => {
    const { data } = await getPlayer(player)
    const country = await getCountry(data.player.doc_country)
    data.country = country.data
    console.log(data)
    return data
}

const comparePlayerData = async (type) => {
    return axios(`${API_URL}/players?compare=${type}`)
}

export default {
    getPlayers,
    getPlayer,
    getCountry,
    getPlayerData,
    comparePlayerData,
}
