const UnknownActionError = require("../../error")

/**
 * @param rawAction {string | ActionKind}
 * @return {ActionKind}
 *
 **/
const Action = (rawAction) => {
  switch (rawAction) {
    case "publish": return rawAction
    case "remove": return rawAction
    case "overwrite": return rawAction
    default: throw UnknownActionError(rawAction)
  }
}

module.exports = Action