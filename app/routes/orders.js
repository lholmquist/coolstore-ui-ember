import Route from '@ember/routing/route';

export default class OrdersRoute extends Route {
  async model() {
    console.log('getting order data');
    const protocolUrl = 'http://';
    const hostUrl = 'localhost:3000';
    // const protocolUrl = `${window.location.protocol}://`;
    // const hostUrl = COOLSTORE_CONFIG.OCP_NAMESPACE ? 'catalog-' + COOLSTORE_CONFIG.OCP_NAMESPACE + '.' + window.location.host.replace(/^.*?\.(.*)/g,"$1") : 'localhost:7072';
    const apiUrl = '/api/orders';

    const baseUrl = protocolUrl + hostUrl + apiUrl;
    const res = await fetch(baseUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
}
