class Individual {
  constructor(genes = []){
    this.genes = genes;
    this.genesLength = 5;
  }

  createGenes(){
    for (var i =0; i <= this.genesLength; i++) {
      this.genes.push(Math.floor((Math.random() * 10) + 1) % 2);
    }
  }

  printGenes(){
    var string = "["
    for (var i =0; i <= this.genesLength; i++) {
      string += `${this.genes[i]}`;
    }
    string += "]";
    return string;
  }

  fitness(){
    var fitness = 0; 
    for (var i =0; i <= this.genesLength; i++) {
      this.genes[i] == 1 ? ++fitness : 0;
    }
    return fitness;
  }
}

export default Individual;