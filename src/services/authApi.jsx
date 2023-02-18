import api from './Api'

const signin = async (email, password) => {
  return api.post('/api/sign-in', { email, password })
}

export default signin
