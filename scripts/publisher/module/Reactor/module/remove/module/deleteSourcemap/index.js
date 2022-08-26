const controller = require("../../../../../../lib/SourcemapController/index")

/**
 * @param config {Config}
 * @return {(sourcemapId: string) => void}
 *
 **/
const deleteSourcemap = (config) => async (sourcemapId) => {
  const handleError = (err) => {
    console.log(err?.stack || `Deleted '${sourcemapId}' source map`)
  }

  /** @type {DeleteOption} */
  const deleteOption = {
    ...config,
    sourcemapId
  }

  await controller.deleteSourcemap(deleteOption, handleError)
}

module.exports = deleteSourcemap