const Configstore = require('configstore')

class CredentialManager {
  constructor (name) {
    this.conf = new Configstore(name)
  }
  getKeyAndSecret () {
    let key = this.conf.get('apiKey')
    if (key) {
      let secret = this.conf.get('apiSecret')
      return [key, secret]
    }
  }
}

module.exports = CredentialManager
