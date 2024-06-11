import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

function createCartUrl() {
  const protocolUrl = 'http://';
  const hostUrl = 'localhost:7074';
  // const protocolUrl = `${window.location.protocol}://`;
  // const hostUrl = COOLSTORE_CONFIG.OCP_NAMESPACE ? 'catalog-' + COOLSTORE_CONFIG.OCP_NAMESPACE + '.' + window.location.host.replace(/^.*?\.(.*)/g,"$1") : 'localhost:7072';
  const apiUrl = `/api/v2/cart`;

  const baseUrl = protocolUrl + hostUrl + apiUrl;

  return baseUrl;
}

async function getCartData(cartId) {
  const res = await fetch(`${createCartUrl()}/${cartId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function putCartData({ item, quantity, cartId }) {
  const res = await fetch(`${createCartUrl()}/${cartId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product: item,
      quantity,
    }),
  });

  return res.json();
}

async function removeCartData({ item, cartId }) {
  const removeUrl = `${createCartUrl()}/${cartId}/${item.itemId}`;
  const res = await fetch(removeUrl, {
    method: 'DELETE',
  });

  return res.json();
}

async function checkoutWithBilling({ billingInfo, cartId }) {
  const checkoutUrl = `${createCartUrl()}/checkout/${cartId}`;
  const res = await fetch(checkoutUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(billingInfo),
  });

  return res.json();
}

export default class CartService extends Service {
  @tracked cart;

  async initialize() {
    // Get id from localstorage
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      // No current cartId, so create a random one
      cartId = `id-${Math.random()}`;
      // Set into local storage
      localStorage.setItem('cartId', cartId);
    }

    this.cart = {};
    this.cart.cartId = cartId;
    // get the cart data based on the ID
    this.getCart();
  }

  async addCartItem(item, quantity) {
    // Add to the remote cart
    const returnedCart = await putCartData({
      item,
      quantity,
      cartId: this.cart.cartId,
    });
    // Add to the local store
    this.cart = returnedCart;
  }

  async getCart() {
    this.cart = await getCartData(this.cart.cartId);
    return this.cart;
  }

  async removeItemFromCart(item) {
    console.log('remove');
    const returnedCart = await removeCartData({
      item,
      cartId: this.cart.cartId,
    });
    this.cart = returnedCart;
  }

  async checkout(billingInfo) {
    console.log(billingInfo);
    console.log('checking out');
    // Submit Order and Reset the Cart - reseting the cart happens on the server
    this.cart = await checkoutWithBilling({
      billingInfo,
      cartId: this.cart.cartId,
    });
  }
}
