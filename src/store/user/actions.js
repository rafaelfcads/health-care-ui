import { find, get } from 'lodash/fp'
import axios from 'axios'

const { API } = process.env

export const search = async({ commit }, data) => {

  const { token } = data
  const headers = { authorization: `Bearer ${token}`}
  const response = await axios.get(`${API}/users`, { headers })

  const users = get('data.users', response)
  commit('users', users)
}

export const load = ({ state, commit }, id) => {
  const user = find({ id: parseInt(id) }, state.users)
  commit('user', user)
}