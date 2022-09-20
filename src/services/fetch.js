import axios from 'axios';

export async function customFetch (url, properties) {
    let token = localStorage.getItem('token');
        const config = {
            ...properties,
            url: url,
            headers: {
                ...properties?.headers,
                "Authorization": `Bearer ${token}`
            }
        }
        try {
            const result = await axios(config)
            return result
        }
        catch (error) {
            console.log(error)
        }
}

