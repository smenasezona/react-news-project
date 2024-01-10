import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_API_URL = import.meta.env.VITE_NEWS_BASE_API_URL

export const getNews = async (pageNumber = 1, pageSize = 10) => {
	try {
		const response = await axios.get(`${BASE_API_URL}search`, {
			params: {
				apiKey: API_KEY,
				pageNumber,
				pageSize,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}
