/** @type ActionKindList */
const actionKindList = ["overwrite", "publish", "remove"]
const flattenActionList = actionKindList.map(action => `"${action}"`).join(" or ")

/**
 * @param gotAction {string}
 * @return {Error}
 *
 **/
const UnknownActionError = (gotAction) => new Error(
  `
  unknown action error.
  you should use action (${flattenActionList}).
  but got ${gotAction}
  `
)

module.exports = UnknownActionError