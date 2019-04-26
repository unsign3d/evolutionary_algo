export const INPUT = 'INPUT'
export const HIDDEN = 'HIDDEN'
export const OUTPUT = 'OUTPUT'

class Node {
  constructor (type, index = 0, bias = 0, squash) {
    if (!this.checkType(type)) {
      Error(`[NODE] type: ${type} not supported`)
    }
    this.type = type
    this.type = type
    this.index = index
    this.bias = bias
    this.squash = squash
  }

  checkType (type) {
    const allowedTypes = [INPUT, HIDDEN, OUTPUT]
    return allowedTypes.includes(type)
  }
}

export default Node
