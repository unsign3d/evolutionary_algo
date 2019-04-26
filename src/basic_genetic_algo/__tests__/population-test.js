import Population from '../population'
import Individual from '../individual'

describe('with an empty population', () => {
  const subject = new Population([])
  it('empty population is empty', () => {
    expect(subject.individuals).toEqual([])
    expect(subject.populationCount).toBe(0)
  })
})

describe('with an empty population', () => {
  const individuals = [new Individual()]
  const subject = new Population(individuals)
  it('empty population is empty', () => {
    expect(subject.individuals).toEqual(individuals)
    expect(subject.populationCount).toBe(1)
  })
})
