import Vue from 'vue'
import Vuex from 'vuex'
import Service from '@/service/Service.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
    token: '',
    user:{}
  },
  mutations: {
    saveToCart(state,payload){
      let item = state.cart.find(item => item.id == payload.id);
      if (item) {
        item.qty += Number(payload.qty);
      } else {
        state.cart.push(payload);
      }
    },
    storeCart(state){
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
     increasement (state, payload) {
      let item = state.cart.find(item => item.id == payload)
      item.qty++;
    },
    decreasement (state, payload) {
      let item = state.cart.find(item => item.id == payload)
      item.qty--;
    },
    setCartState(state){
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'));
      }else{
        state.cart = [];
      }
    },
    storeToken(state,payload){
      state.token = payload
    },
    saveToken(state){
      localStorage.setItem('token', state.token);
    },
    setTokenState(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token');
      }else{
        state.token = '';
      }
    },
    getUser(state){
      Service.getUser(state.token)
        .then(response => {
          this.dispatch('storeUser',response.data)
        })
    },
    storeUser(state, payload){
      state.user = payload
    }
  },
  actions:{
    addToCart({commit}, payload){
      commit('saveToCart',payload)
      commit('storeCart')
    },
    setState({commit}){
      commit('setCartState')
    },
    decreasement({ commit }, payload) {
      commit('decreasement', payload)
      commit('storeCart')
    },
    increasement({ commit }, payload) {
      commit('increasement', payload)
      commit('storeCart')
    },
     storeToken({commit}, payload){
      commit('storeToken', payload)
      commit('saveToken')
    },
    setToken({commit}){
      commit('setTokenState')
    },
     getUser({commit}){
      commit('getUser')
    },
    storeUser({commit}, payload){
      commit('storeUser', payload)
    }
  },
  getters:{

  }
})

export default store
