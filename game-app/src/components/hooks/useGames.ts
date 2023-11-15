import { useEffect, useState } from 'react'
import apiClient from '../../services/api-client'
import { CanceledError } from 'axios'

export interface Game {
	id: number
	name: string
	background_image: string
}
interface FatchGamesResponse {
	count: number
	results: Game[]
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState('')

	useEffect(() => {
		const controller = new AbortController() //***

		apiClient
			.get<FatchGamesResponse>('/games', { signal: controller.signal }) // *** {signal: controller.signal}
			.then(res => setGames(res.data.results))
			.catch(err => {
				if (err instanceof CanceledError) return
				setError(err.massage)
			})

		return () => controller.abort() ///***
	}, []) // *** [] include an array of dependencies and the effect hook. Without this, because send a send request to our back-end. (the cancellations)
	return { games, error }
}

export default useGames
