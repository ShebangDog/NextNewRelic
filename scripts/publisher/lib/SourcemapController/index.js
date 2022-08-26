const origin = require("@newrelic/publish-sourcemap")
const { promisify } = require("util")

const [deleteSourcemap, listSourcemaps, publishSourcemap] = [
  origin.deleteSourcemap,
  origin.listSourcemaps,
  origin.publishSourcemap
].map(promisify)


module.exports = {
  deleteSourcemap,
  listSourcemaps,
  publishSourcemap
}
