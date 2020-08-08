import { make } from 'vuex-pathify'

export const state = {
  hello: 'world'
}

export const getters = make.getters(state)
export const mutations = make.mutations(state)