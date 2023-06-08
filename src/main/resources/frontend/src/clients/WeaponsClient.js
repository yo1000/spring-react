export default class WeaponsClient {
  /**
   *
   * @param {AuthContextProps} auth
   */
  constructor(auth) {
    this.auth = auth
    this.baseUri = process.env.API_BASE_URI || ""
  }

  /**
   * @typedef {object} Weapon
   * @property {number} id
   * @property {string} name
   * @property {number} price
   * @property {number} str
   * @property {number} hit
   */

  /**
   * @typedef {object} ItemQuantity
   * @property {Item} item
   * @property {number} quantity
   */

  /**
   * @typedef {object} WeaponRemodel
   * @property {Weapon} weapon
   * @property {ItemQuantity[]} itemQuantities
   */

  /**
   *
   * @returns {Promise<WeaponRemodel[]>}
   */
  get = async () => {
    try {
      const resp = await fetch(`${this.baseUri}/api/weapons`, {
        headers: {
          "Authorization": `Bearer ${this.auth.user?.access_token}`,
        },
      })
      if (resp.ok) return await resp.json()
    } catch (err) {
      console.error(err)
    }
    return []
  }
}
