const fetchSourcemapList = require("./module/fetchSourcemapList")
const deleteSourcemap = require("./module/deleteSourcemap")
/**
 * @type Reaction
 *
 **/
const remove = async (config, onFinished) => {
  try {
    const sourcemapList = await fetchSourcemapList(config)
    const deleteSourcemapById = await deleteSourcemap(config)

    sourcemapList
      .map(sourcemap => sourcemap.id)
      .forEach(deleteSourcemapById)
  } catch (err) {
    onFinished(err.stack)
  }
}

module.exports = remove