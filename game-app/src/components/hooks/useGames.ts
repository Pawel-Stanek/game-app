import { useEffect, useState } from 'react'
import apiClient from '../../services/api-client'

interface Game {
	id: number
	name: string
}
interface FatchGamesResponse {
	count: number
	results: Game[]
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		apiClient
			.get<FatchGamesResponse>('/games')
			.then(res => setGames(res.data.results))
			.catch(err => setError(err.massage))
	})
	return { games, error }
}

export default useGames
