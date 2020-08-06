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
    yearsExperience: 4
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: false,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: false,
    yearsExperience: 3
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: false,
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
    canDodgeBall: false,
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
    canThrowBall: false,
    canDodgeBall: true,
    hasPaid: false,
    isHealthy: false,
    yearsExperience: 5
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
    yearsExperience: 1
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 0
  },
]

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

const assignRedTeam = () => {
  console.log('red');
}

const assignBlueTeam = () => {
  console.log('blue');
}

class BlueTeammate {
  constructor(){
    this.mascot = 'Cookie Monster';
    this.teamColor = 'blue';
  }
}

class RedTeammate {
  constructor(){
    this.mascot = 'Elmo';
    this.teamColor = 'red';
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener('click', function() {makePlayer(person.id)});
    li.appendChild(button);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
    listElement.append(li);
  })
}

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`);
  listOfPlayers.push();
  console.log(listOfPlayers)
  // const playersList = document.getElementById("players");
  // listOfPlayers.forEach(player => {
  //   const li = document.createElement("li");
  //   const redButton = document.createElement("button");
  //   const blueButton = document.createElement("button");
  //   li.innerHTML = `Name: ${player.canThrowBall}, Can Throw: ${player.canThrowBall}, Dodge Ball: ${player.canDodgeBall}, Paid: ${player.hasPaid}, Healthy: ${player.isHealthy}, Years of Experience: ${player.yearsExperience}`;
  //   redButton.innerHTML = 'Red Team';
  //   blueButton.innerHTML = 'Blue Team';
  //   redButton.addEventListener('click', assignRedTeam);
  //   blueButton.addEventListener('click', assignBlueTeam);
  //   playersList.append(li);
  //   li.append(redButton, blueButton);
  // })
}