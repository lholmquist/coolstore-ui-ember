import { module, test } from 'qunit';
import { setupRenderingTest } from 'coolstore-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cart-items', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CartItems />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CartItems>
        template block text
      </CartItems>
    `);

    assert.dom().hasText('template block text');
  });
});
