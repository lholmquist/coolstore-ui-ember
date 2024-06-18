import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @service cart;
  @service router;

  @action removeNotification() {
    // Should remove the one that are clicking on
    this.cart.cartNotifications.popObject();
  }
}
