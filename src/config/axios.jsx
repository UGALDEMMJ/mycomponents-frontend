
const clientBackend = axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clientBackend