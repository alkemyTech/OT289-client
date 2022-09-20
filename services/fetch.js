import axios from 'axios';

export async function authFetch (url, properties) {
    let token = localStorage.getItem('token');
    if(token) {
        const config = {
            ...properties,
            url: url,
            headers: {
                ...properties?.headers,
                "Authorization": `Bearer ${token}`
            }
        }
        try {
            return await axios(config)
        }
        catch (error) {
            console.log(error)
        }
    } else {
        console.log('token not found') // logout method?
    }
}

export async function publicFetch (url, properties) {
    const config = {
        ...properties,
        url: url
    }
      try {
        return await axios(config)
      } catch (error) {
        console.log(error)
      }
}
