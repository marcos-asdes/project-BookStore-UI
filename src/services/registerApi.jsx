import api from './Api'

const signup = async (email, password, name, surname, phone) => {
  return api.post('/api/sign-up', { email, password, name, surname, phone })
}

export default signup
