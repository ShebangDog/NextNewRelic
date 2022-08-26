/**
 * @type Reaction
 *
 **/
const remove = require("../remove")
const publish = require("../publish")
const overwrite = async (config, onFinished) => {
  const flow = [remove, publish]

  for (const procedure of flow) {
    await procedure(config, onFinished)
  }
}

module.exports = overwrite