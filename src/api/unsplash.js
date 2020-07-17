import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID Dv-K5j8blpTnpTzF7P8zSIIpJfj2SSgG_sysw9IIxwg",
      },
})