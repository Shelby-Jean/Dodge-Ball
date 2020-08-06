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

const listOfPlayers = []
const blueTeam = []
const redTeam = []

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
    // new Teammate(this.id, this.name, this.age, this.skillSet, this.placeBorn, this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, this.yearsExperience, mascot, color);
    blueTeam.push(this);
  }
  assignRed = () => {
    // new Teammate(this.id, this.name, this.age, this.skillSet, this.placeBorn, this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, this.yearsExperience, mascot, color);
    redTeam.push(this);
  }
  assignPlayer = () => {
    listOfPlayers.push(this);
  }
}

class Teammate extends Player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, color){ 
    super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.mascot = mascot;
    this.color = color;
   }
}

// class RedTeammate extends Player {
//   constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){ 
//     super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
//     this.mascot = "Red Robin";
//     this.color = "red";
//    }
// }

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {
      makePlayer(person.id)
      listElement.removeChild(li)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
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
  console.log(listOfPlayers);
  const li = document.createElement("li");
  const buttonRed = document.createElement("button");
  const buttonBlue = document.createElement("button");
  buttonRed.innerHTML = "Assign Red Team";
  buttonBlue.innerHTML = "Assign Blue Team";
  buttonRed.addEventListener('click', function() { addToRed(athlete.id) });

  li.appendChild(buttonRed);
  li.appendChild(buttonBlue);
  li.appendChild(document.createTextNode(athlete.name));
  listElement.append(li);
}

const addToRed = (id) => {
  const listElement = document.getElementById('red');
  let findPlayer = listOfPlayers.find(entry => {
    return entry.id == id;
  })
  let playerIndex = listOfPlayers.indexOf(findPlayer);
  listOfPlayers.splice(playerIndex, 1);
  let athlete = new Teammate(
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
    "red robin",
    "red"
  )
  athlete.assignRed();
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(athlete.name));
  listElement.append(li);
}



//find index,remove at that index and remove from array
//add to new array of players, add as li
//instantiate new player

//one function to add to team and call
//methods in red/blue classes will manipulate arrays not on dom