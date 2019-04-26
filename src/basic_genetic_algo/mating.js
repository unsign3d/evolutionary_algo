class Mating {
  static crossover (parents) {
    const crossoverPoint = Math.floor((Math.random() * 10) + 1) % parents[0].genesLength
    const genes = parents[0].genes.slice()
    for (var i = 0; i <= crossoverPoint; ++i) {
      genes[i] = parents[1].genes[i]
    }
    return genes
  }

  static mutation (genes) {
    const mutationPoint = Math.floor((Math.random() * 10) + 1) % genes.length
    genes[mutationPoint] = Math.abs(genes[mutationPoint] - 1)
  }
}

export default Mating
