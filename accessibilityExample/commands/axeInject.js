const fs = require('fs')
const path = require('path')

const localPath = path.join(__dirname, '..', 'node_modules', 'axe-core', 'axe.min.js')
const parentPath = path.join(__dirname, '..', '..', 'axe-core', 'axe.min.js')

const axe = fs.existsSync(localPath)
  ? fs.readFileSync(localPath, 'utf8')
  : fs.readFileSync(parentPath, 'utf8')

module.exports.command = function axeInject() {
  this.execute(function(js) { eval(js) }, [axe])

  return this
}
