export default class CardsClient {
  /**
   *
   * @param {AuthContextProps} auth
   */
  constructor(auth) {
    this.auth = auth
    this.baseUri = process.env.API_BASE_URI || ""
  }

  /**
   * @typedef {object} Element
   * @property {number} id
   * @property {string} name
   */

  /**
   * @typedef {object} Card
   * @property {number} id
   * @property {string} name
   * @property {number} level
   * @property {Element} elemental
   * @property {number} top
   * @property {number} right
   * @property {number} bottom
   * @property {number} left
   */

  /**
   * @typedef {object} CardMod
   * @property {number} id
   * @property {Card} card
   * @property {number} cardQuantity
   * @property {Item} item
   * @property {number} itemQuantity
   */

  /**
   *
   * @returns {Promise<CardMod[]>}
   */
  get = async () => {
    const resp = await fetch(`${this.baseUri}/api/cards`, {
      headers: {
        "Authorization": `Bearer ${this.auth.user?.access_token}`,
      },
    })
    return await resp.json()
  }
}
