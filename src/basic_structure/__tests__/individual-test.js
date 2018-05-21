import Individual from '../individual';

describe('fitness function', () => {
  const subject = new Individual();
  it('fitness is a count of ones', () => {
    const expected = subject.genes.reduce((a,c) => (c == 1 ? a++ : a ));
    expect(subject.fitness).toEqual(expected);
  });
});