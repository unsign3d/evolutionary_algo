import Population from '../basic_genetic_algo/population'
import Individual from '../basic_genetic_algo/individual'
import Mating from '../basic_genetic_algo/mating'

const NUMBER_OF_INDIVIDUALS = 50

const createPopulation = () => {
  const individuals = []
  var individual = null
  for (var i = 0; i <= NUMBER_OF_INDIVIDUALS; ++i) {
    individual = new Individual()
    individual.createGenes()
    individuals.push(individual)
  }
  return new Population(individuals)
}

const rouletteWheelSelection = () => {
  const population = createPopulation()
  var genes
  while (population.fittest().fitness() < 6) {
    genes = Mating.crossover([
      population.individuals[Math.floor((Math.random() * 10) + 1) % NUMBER_OF_INDIVIDUALS],
      population.individuals[Math.floor((Math.random() * 10) + 1) % NUMBER_OF_INDIVIDUALS]
    ])
    Mating.mutation(genes)
    population.replace(
      population.leastFittest(),
      new Individual(genes)
    )
    console.log(`The fittest individual score: ${population.fittest().fitness()} with genes: ${population.fittest().printGenes()}`)
  }
}

rouletteWheelSelection()
