'use strict';
const assert = require('assert');

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 2
  },
]

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
  assignBlue = () => {
    blueTeam.push(this);
  }
  assignRed = () => {
    redTeam.push(this);
  }
  assignPlayer = () => {
    listOfPlayers.push(this);
  }
}

class RedTeammate extends Player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){ 
    super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = 'Elmo';
    this.color = 'Red';
   }
}

class BlueTeammate extends Player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){ 
    super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = 'Cookie Monster';
    this.color = 'Blue';
   }
}


const makePlayer = (person) => {
  let findPlayer = arrOfPeople.find(entry => {
    return entry.id == person;
  })
  let playerIndex = arrOfPeople.indexOf(findPlayer);
  arrOfPeople.splice(playerIndex, 1);
  let athlete = new Player(
    findPlayer.id,  
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    findPlayer.canThrowBall,
    findPlayer.canDodgeBall,
    findPlayer.hasPaid,
    findPlayer.isHealthy,
    findPlayer.yearsExperience
  )
  athlete.assignPlayer();
  addToRed(athlete.id) ;
  addToBlue(athlete.id) ;
}

const addToRed = (id) => {
  let findPlayer = listOfPlayers.find(entry => {
    return entry.id == id;
  })
  let playerIndex = listOfPlayers.indexOf(findPlayer);
  listOfPlayers.splice(playerIndex, 1);
  let athlete = new RedTeammate(
    findPlayer.id,  
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    findPlayer.canThrowBall,
    findPlayer.canDodgeBall,
    findPlayer.hasPaid,
    findPlayer.isHealthy,
    findPlayer.yearsExperience,
    findPlayer.mascot,
    findPlayer.color
  )
  athlete.assignRed();
}

const addToBlue = (id) => {
  let findPlayer = listOfPlayers.find(entry => {
    return entry.id == id;
  })
  let playerIndex = listOfPlayers.indexOf(findPlayer);
  listOfPlayers.splice(playerIndex, 1);
  let athlete = new BlueTeammate(
    findPlayer.id,  
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    findPlayer.canThrowBall,
    findPlayer.canDodgeBall,
    findPlayer.hasPaid,
    findPlayer.isHealthy,
    findPlayer.yearsExperience,
    findPlayer.mascot,
    findPlayer.color
  )
  athlete.assignBlue();
}






//TESTS
if (typeof describe === 'function'){
  describe('Player', function(){
    it('should have an id, a name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience upon instantiation', function(){
      const athlete = new Player(2, 'Charles Young', 55, 'welding', 'Omaha, Nebraska', true, true, false, true, 2);
      assert.equal(athlete.name, 'Charles Young');
      assert.equal(athlete.canThrowBall, true);
      assert.equal(athlete.canDodgeBall, true);
      assert.equal(athlete.hasPaid, false);
      assert.equal(athlete.isHealthy, true);
      assert.equal(athlete.yearsExperience, 2);
    });
  });

  describe('RedTeammate', function(){
    it('should have an id, a name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, a mascot, and a color upon instantiation', function(){
      let redteammate = new RedTeammate(2, 'Charles Young', 55, 'welding', 'Omaha, Nebraska', true, true, false, true, 2, 'Elmo', 'Red');
      assert.equal(redteammate.name, 'Charles Young');
      assert.equal(redteammate.mascot, 'Elmo');
      assert.equal(redteammate.color, 'Red');
    });
  });

  describe('BlueTeammate', function(){
    it('should have an id, a name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, a mascot, and a color upon instantiation', function(){
      let blueteammate = new BlueTeammate(2, 'Charles Young', 55, 'welding', 'Omaha, Nebraska', true, true, false, true, 2, 'Cookie Monster', 'Blue');
      assert.equal(blueteammate.name, 'Charles Young');
      assert.equal(blueteammate.mascot, 'Cookie Monster');
      assert.equal(blueteammate.color, 'Blue');
    });
  });
}
