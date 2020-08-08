const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 1
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: false,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 3
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: false,
    canDodgeBall: false,
    hasPaid: false,
    isHealthy: false,
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
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 4
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    canThrowBall: false,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: true,
    yearsExperience: 3
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: false,
    hasPaid: false,
    isHealthy: false,
    yearsExperience: 2
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: false,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 1
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

const listPeopleChoices = () => {
  const listElement = document.getElementById('people');
  arrOfPeople.map(person => {
    const li = document.createElement('li');
    const buttonPlayer = document.createElement('button');
    buttonPlayer.innerHTML = 'Make Player';
    buttonPlayer.addEventListener('click', function() {
      makePlayer(person.id);
      listElement.removeChild(li);
    })
    li.appendChild(buttonPlayer);
    li.appendChild(document.createTextNode(`${person.name} - Years of Experience: ${person.yearsExperience}`));
    listElement.append(li);
  })
}

const makePlayer = (person) => {
  const listElement = document.getElementById('players');
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
  const li = document.createElement('li');
  const buttonRed = document.createElement('button');
  const buttonBlue = document.createElement('button');
  buttonRed.innerHTML = 'Assign Red Team';
  buttonBlue.innerHTML = 'Assign Blue Team';
  buttonRed.addEventListener('click', function() { 
    addToRed(athlete.id) ;
    listElement.removeChild(li);
  })
  buttonBlue.addEventListener('click', function() { 
    addToBlue(athlete.id) ;
    listElement.removeChild(li);
  })
  li.appendChild(buttonRed);
  li.appendChild(buttonBlue);
  li.appendChild(document.createTextNode(`${athlete.name} - Paid: ${athlete.hasPaid}`));
  listElement.append(li);
}

const addToRed = (id) => {
  const listElement = document.getElementById('red');
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
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`Player: ${athlete.name}, Team Mascot: ${athlete.mascot}, Team Color: ${athlete.color}`));
  listElement.append(li);
}

const addToBlue = (id) => {
  const listElement = document.getElementById('blue');
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
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`Player: ${athlete.name}, Team Mascot: ${athlete.mascot}, Team Color: ${athlete.color}`));
  listElement.append(li);
}