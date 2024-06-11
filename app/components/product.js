import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { service } from '@ember/service';

export default class ProductComponent extends Component {
  @service cart;

  @tracked quantity = 1;

  @action changeSelect(evt) {
    this.quantity = evt.currentTarget.value;
  }

  @action addToCart(product) {
    // Add this item to the current carts cartItems
    this.cart.addCartItem(product, this.quantity);
  }
}
