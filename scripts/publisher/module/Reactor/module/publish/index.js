const { publishSourcemap } = require("../../../../lib/SourcemapController/index")

/**
 * @type Reaction
 *
 **/
const publish = async (config, onFinished) => {
  /**
   * @param err {Error | undefined}
   * @return {void}
   *
   **/
  const handleFinished = (err) => onFinished(err?.stack || "Source map upload done")

  return await publishSourcemap(config, handleFinished)
}

module.exports = publish
