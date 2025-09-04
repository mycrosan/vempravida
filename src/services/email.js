import axios from 'axios'

const email = axios.create({
  baseURL: 'http://www.universosbrasil.com.br',
  timeout: 1000
})
export default email
