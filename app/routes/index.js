import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    // Get the product list
    const protocolUrl = 'http://';
    const hostUrl = 'localhost:7072';
    // const protocolUrl = `${window.location.protocol}://`;
    // const hostUrl = COOLSTORE_CONFIG.OCP_NAMESPACE ? 'catalog-' + COOLSTORE_CONFIG.OCP_NAMESPACE + '.' + window.location.host.replace(/^.*?\.(.*)/g,"$1") : 'localhost:7072';
    const apiUrl = '/api/v1/products';

    const baseUrl = protocolUrl + hostUrl + apiUrl;
    const res = await fetch(baseUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
}
