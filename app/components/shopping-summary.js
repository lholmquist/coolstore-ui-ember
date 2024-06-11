import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ShoppingSummaryComponent extends Component {
  @service router;

  get subtotal() {
    let sub = 0;
    this.args.cart.cart.cartItems.forEach((item) => {
      sub += item.quantity * item.price;
    });
    return sub;
  }

  @action
  goToCheckout() {
    console.log('go to checkout');
    this.router.transitionTo('checkout');
  }
}
