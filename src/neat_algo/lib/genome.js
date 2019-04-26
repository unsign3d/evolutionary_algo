import { INPUT, OUTPUT } from './node'

class Genome {
  constructor (inputs, outputs) {
    this.inputs = inputs
    this.put
    this.nodes = nodes
    this.connections = connections
    this.addNodes.bind(this)
  }

  addNodes (node) {
    if (node.type === INPUT) { this.nodes.unshift(node) }
    if (node.type === OUTPUT) { this.nodes.push(node) }
  }
}

export default Genome
