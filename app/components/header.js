import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service cart;
}
