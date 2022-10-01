import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

const publicService = {
    newsDetail: async (id) => {
        return await axios.get(`/news/${id}`)
    }
}

export default publicService;