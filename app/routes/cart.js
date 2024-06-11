import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CartRoute extends Route {
  @service cart;

  async model() {
    return this.cart.getCart();
  }
}
