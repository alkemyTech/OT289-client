import axios from 'axios'

let publicAxios = axios.create({
    baseURL: 'http://localhost:3001'
})

const publicService = {
    newsList: async () => {
        return await publicAxios.get('/news')
    },
    newsDetail: async (id) => {
        return await publicAxios.get(`/news/${id}`)
    }
}

export default publicService;