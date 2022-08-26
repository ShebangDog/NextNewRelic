/**
 * @param nodeArguments {string[]}
 * @return {{action: string}}
 *
 **/
const parseArguments = (nodeArguments) => {
  const [, , ...arguments] = nodeArguments
  const [action] = arguments

  return ({
    action
  })
}

module.exports = parseArguments