# pathify-demo

My plan is to keep the vuex store files as close as possible to the components they belong to.

The component components/demo/index.vue is responsible, for managing the state in components/demo/store/state

At the end, I have to import all the states in the normal store directory and make them accessable to the whole application. This could be generated later.

The problem I have with this solution is, that I'm not able to access the whole [context](https://nuxtjs.org/api/context) of nuxt in demoState.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
