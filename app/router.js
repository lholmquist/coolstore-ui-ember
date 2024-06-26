import EmberRouter from '@ember/routing/router';
import config from 'coolstore-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('orders');
  this.route('cart');
  this.route('checkout');
});
