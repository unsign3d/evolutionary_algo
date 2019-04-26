class Population {
  constructor (individuals) {
    this.individuals = individuals
    this.populationCount = individuals.length
    this.fittestIndividual = null
    this.lestFittestIndividual = null
    this.secondFittestIndividual = null
  }

  fittest () {
    if (this.fittestIndividual != null) {
      return this.fittestIndividual
    }

    this.fittestIndividual = this.individuals[0]
    for (var i = 1; i <= this.populationCount; ++i) {
      if (this.fittestIndividual.fitness() < this.individuals[i]) {
        this.fittestIndividual = this.individuals[i]
      }
    }
    return this.fittestIndividual
  }

  leastFittest () {
    if (this.leastFittestIndividual !== null) {
      return this.leastFittestIndividual
    }

    this.lestFittestIndividual = this.individuals[0]
    for (var i = 1; i <= this.populationCount; ++i) {
      if (this.lestFittestIndividual.fitness() > this.individuals[i]) {
        this.lestFittestIndividual = this.individuals[i]
      }
    }
    return this.lestFittestIndividual
  }

  secondFittest () {
    if (this.secondFittestIndividual != null) {
      return this.secondFittestIndividual
    }

    this.secondFittestIndividual = this.individuals[0]
    for (var i = 1; i <= this.populationCount; ++i) {
      if (this.secondFittestIndividual.fitness() < this.individuals[i] &&
          this.secondFittest !== this.fittest()) {
        this.secondFittestIndividual = this.individuals[i]
      }
    }
    return this.secondFittestIndividual
  }

  replace (o, n) {
    const index = this.individuals.indexOf(o)
    this.individuals[index] = n
    this.fittestIndividual = null
    this.lestFittestIndividual = null
    this.secondFittestIndividual = null
  }
}

export default Population
