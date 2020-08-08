import pathify from 'vuex-pathify'
import { 
  state as demoState
, getters as demoGetters
, mutations as demoMutations
} from '@/components/demo/store/demoState'

export const plugins = [ pathify.plugin ]

export const state = () => ({
  ...demoState
})


export const getters = demoGetters
export const mutations = demoMutations