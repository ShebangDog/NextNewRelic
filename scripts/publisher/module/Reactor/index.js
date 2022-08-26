const ActionMapper = require("./module/ActionMapper")

/**
 * @param config {Config}
 * @return {( action: ActionKind, onFinished: ((message: String) => void)) => void}
 *
 **/
const Reactor = (config) => async (action, onFinished) => {
  const actionMapper = ActionMapper(action)

  await actionMapper(config, onFinished)
}

module.exports = Reactor