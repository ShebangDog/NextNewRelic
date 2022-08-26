const {listSourcemaps} = require("../../../../../../lib/SourcemapController/index.js")

/** @type {(config: Config) => Promise<Sourcemap[]>} */
const fetchSourcemapList = async (config) => {
  /** @type {FetchOption} */
  const option = {
    ...config,
    limit: 20,
    offset: 0,
  }

  const { sourcemaps } = await listSourcemaps(option)

  return sourcemaps
}

module.exports = fetchSourcemapList
