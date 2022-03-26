import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import vuetify from './plugins/vuetify'

Vue.use(VueApollo)
Vue.config.productionTip = false
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://strapi-projects-cms.herokuapp.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount('#app')

