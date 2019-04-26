import Population from './population'
import Individual from './individual'
import Mating from './mating'

// const fittestInGenration = () => {
//   const individuals = []
//   var individual = null
//   for (var i = 0; i <= 50; ++i) {
//     individual = new Individual()
//     individual.createGenes()
//     individuals.push(individual)
//   }
//   const fittest = new Population(individuals).fittest()
//   console.log(`The fittest individual score: ${fittest.fitness()} with genes: ${fittest.printGenes()}`)
//   return fittest
// }

const fittestInTimeline = () => {
  const individuals = []
  var individual = null

  for (var i = 0; i <= 50; ++i) {
    individual = new Individual()
    individual.createGenes()
    individuals.push(individual)
  }

  const population = new Population(individuals)
  console.log(`The fittest individual score: ${population.fittest().fitness()} with genes: ${population.fittest().printGenes()}`)

  while (population.fittest().fitness() < 6) {
    var genes = Mating.crossover([population.fittest(), population.secondFittest()])

    Mating.mutation(genes)

    population.replace(
      population.leastFittest(),
      new Individual(genes)
    )
    console.log(`The fittest individual score: ${population.fittest().fitness()} with genes: ${population.fittest().printGenes()}`)
  }
}

// fittestInGenration();
fittestInTimeline()
