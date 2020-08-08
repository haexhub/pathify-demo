import { make } from 'vuex-pathify'

export const state = {
  hello: 'world'
}

export const mutations = make.mutations(state)