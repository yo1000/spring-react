export default class ItemsClient {
  /**
   *
   * @param {AuthContextProps} auth
   */
  constructor(auth) {
    this.auth = auth
    this.baseUri = process.env.API_BASE_URI || ""
  }

  /**
   * @typedef {object} Item
   * @property {number} id
   * @property {string} name
   * @property {number} price
   * @property {number} sellPrice
   */

  /**
   *
   * @returns {Promise<Item[]>}
   */
  get = async () => {
    const resp = await fetch(`${this.baseUri}/api/items`, {
      headers: {
        "Authorization": `Bearer ${this.auth.user?.access_token}`,
      },
    })
    return await resp.json()
  }
}
