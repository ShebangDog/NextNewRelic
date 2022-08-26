const publish = require("../publish")
const remove = require("../remove")
const overwrite = require("../overwrite")
const UnknownActionError = require("../../../../error")

const ActionMapper = (action) => {
  switch (action) {
    case "publish": return publish
    case "remove": return remove
    case "overwrite": return overwrite
    default: throw UnknownActionError(action)
  }
}

module.exports = ActionMapper