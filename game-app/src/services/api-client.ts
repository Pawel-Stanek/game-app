import axios from 'axios'
export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ee42d5a174214634b44e42009d034bc1',
	},
})
