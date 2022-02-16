// Client entry point, imports all client code

// import '/imports/startup/client';
import '/imports/startup/both';

import { createApp } from 'vue'
import App from '../imports/ui/components/App.vue'

Meteor.startup(() => {
  const app = createApp(App);
  app.mount('#app');
});
