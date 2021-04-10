const base = {
  namespaced:true,
  state: {
    data:''
  },
  getters: {

  },
  mutations: {
    updar(state,data){
      state.data = data
      console.log(data);
    }
  },
  actions: {
    updar({commit},data){
      commit('updar',data)
    }
  }
}
export default base;