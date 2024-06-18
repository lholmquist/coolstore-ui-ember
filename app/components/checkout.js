import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class CheckoutComponent extends Component {
  @service cart;
  @service router;

  @action
  getCheckoutData() {
    // Create a OrderID
    const orderId = `order-${Math.floor(Math.random() * 10000)}-${this.cart.cart.cartId}`;
    const billingInfo = {
      orderId,
      total: this.cart.cart.cartTotal,
      creditCard: {
        number: this.number,
        expiration: `${this.month}/${this.year}`,
        nameOnCard: this.name,
      },
      billingAddress: this.shippingAddress,
      name: this.name,
    };

    console.log(billingInfo);
    // this.cart.checkout(billingInfo);
  }

  @action
  goToCart() {
    console.log('go to cart');
    this.router.transitionTo('cart');
  }
}
