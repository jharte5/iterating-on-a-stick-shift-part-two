const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species,
    period,
    carnivore,
    extinct
  }
}

const makeSingular = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.endsWith('us')) {
    newDino.species = species.slice(0, -2);
  }

  return newDino;
}

const truncateSpecies = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.length > 10) {
    newDino.species = species.slice(0, 7) + '...';
  }

  return newDino;
}

const makeExtinct = function(dinosaur) {
  const {species, period, carnivore} = dinosaur;
  const newDino = makeDino(species, period, carnivore, true);

  return newDino;

  // Alternately (but including line 1 of this function)
  
  // return {
  //   species,
  //   period,
  //   carnivore,
  //   extinct: true
  // }
}

const isCarnivore = function(dinosaur) {
  if (dinosaur.carnivore === true) {
    return true
  } else {
    dinosaur.carnivore !== true
  } return false
}

const isExtinct = function(dinosaur) {
  if (dinosaur.extinct === true) {
    return true
  } else {
    dinosaur.extinct !== true
  } return false
}

const isTriassic = function(dinosaur) {
  if (dinosaur.period === 'Triassic') {
    return true
  } else {
    dinosaur.period !== 'Triassic'
  } return false

}

const isJurassic = function(dinosaur) {
  if (dinosaur.period === 'Jurassic') {
    return true
  } else {
    dinosaur.period !== 'Jurassic'
  } return false
}

const isCretaceous = function(dinosaur) {
  if (dinosaur.period === 'Cretaceous') {
    return true
  } else {
    dinosaur.period !== 'Cretaceous'
  } return false
}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
}