
import Http from './http'
import Email from './email'

export const create = (cliente) => Http.post('/clientes.json', cliente)
export const sendMail = (email) => Email.post('/api.php', email)
export const sendMail2 = (email) => Email.post('/api2.php', email)

export const getAllPaged = (page = 0, extraParams = {}) => {
  // const params = {page, ...extraParams}
  return Http.get('/clientes.json')
}

