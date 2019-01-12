export const findAll = ({ state, commit }, data) => {
    const users = data.users
    commit('users', users)
}