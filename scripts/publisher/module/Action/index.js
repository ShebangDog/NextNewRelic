const UnknownActionError = require("../../error")

/**
 * @param rawAction {string | import("./index.d.ts").ActionKind}
 * @return {import("./index.d.ts")}
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