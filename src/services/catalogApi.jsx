import api from './Api'

const catalog = async () => {
  return api.get('/api/catalog')
}

export default catalog
