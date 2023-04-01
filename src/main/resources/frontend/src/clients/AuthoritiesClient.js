export default class AuthoritiesClient {
  /**
   *
   * @param {AuthContextProps} auth
   */
  constructor(auth) {
    this.auth = auth
    this.baseUri = process.env.API_BASE_URI || ""
  }

  /**
   * @typedef {object} Authority
   * @property {string} uri
   * @property {string} method
   * @property {boolean} authorized
   */

  /**
   *
   * @returns {Promise<Authority[]>}
   */
  get = async () => {
    const resp = await fetch(`${this.baseUri}/api/authorities`, {
      headers: {
        "Authorization": `Bearer ${this.auth.user?.access_token}`,
      },
    })
    return await resp.json()
  }
}
