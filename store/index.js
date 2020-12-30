export const state = () => ({
  menu: false,
  nome: 'Dany Schudler'
})

export const mutations = {
  menuAction(state, value) {
    state.menu = value;
  }
}
