import constants from './constants'

const { API_URL } = constants.api

const fetchPlayers = async () => {
    return axios(`${API_URL}/players`)
}

const fetchPlayer = async (player) => {
    const id = player?.id ? player.id : player

    return axios(`${API_URL}/players/${id}/classification`)
}

const fetchCountry = async (doc_country) => {
    return axios(`${API_URL}/countries/${doc_country}`)
}

const fetchPlayerData = async (player) => {
    const { data } = await fetchPlayer(player)
    const country = await fetchCountry(data.player.doc_country)
    data.country = country.data

    return data
}

const fetchPlayerTennis = async (player) => {
    const id = player?.id ? player.id : player

    return axios(`${API_URL}/players/${id}/classification/tennis`)
}

const comparePlayersData = async (type) => {
    return axios(`${API_URL}/players?compare=${type}`)
}

export default {
    fetchPlayers,
    fetchPlayer,
    fetchCountry,
    fetchPlayerData,
    comparePlayersData,
    fetchPlayerTennis,
}
