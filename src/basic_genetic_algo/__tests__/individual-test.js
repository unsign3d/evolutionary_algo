import Individual from '../individual';

describe('fitness function', () => {
  const subject = new Individual([1,1,1,1,1]);
  it('fitness is a count of ones', () => {
    expect(subject.fitness()).toEqual(5);
  });
});