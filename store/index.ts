import pathify from 'vuex-pathify'
import { 
  state as demoState 
, mutations as demoMutations
} from '@/components/demo/store/demoState'

export const plugins = [ pathify.plugin ]

export const state = () => ({
  ...demoState
})

export const mutations = demoMutations