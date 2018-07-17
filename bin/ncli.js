#! /usr/bin/env node

// const CredentialManager = require('../lib/credential-manager')
// async function main () {
//   const creds = new CredentialManager('ncli')
//   let [key, secret] = await creds.getKeyAndSecret()
//   console.log(key, secret)
// }
// main().catch(console.error)
const program = require('commander')
const pkg = require('../package.json')
program
  .version(pkg.version)
  .command('configure', 'configure Twitter-related credentials')
  .command('lookup', 'lookup things on Twitter')
  .parse(process.argv)
