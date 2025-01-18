import { randomNumberInRange, randomOptions } from "../../utils/Random"

class Player {
    constructor(email) {
      this.id = Math.random()
      this.email = email || ""
      this.name = randomOptions([
        'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 'James',
        'Mia', 'Benjamin', 'Charlotte', 'Lucas', 'Amelia', 'Henry', 'Harper', 'Alexander', 'Evelyn', 'Michael',
        'Abigail', 'Daniel', 'Emily', 'Logan', 'Madison', 'Matthew', 'Victoria', 'David', 'Grace', 'Joseph',
        'Chloe', 'Jackson', 'Natalie', 'Samuel', 'Lily', 'Gabriel', 'Avery', 'John', 'Addison', 'Ryan',
        'Hannah', 'Nicholas', 'Aubrey', 'Christopher', 'Ella', 'Joshua', 'Samantha', 'Andrew', 'Leah', 'Carter',
        'Aria', 'Anthony', 'Zoe', 'Thomas', 'Audrey', 'Ethan', 'Allison', 'Christian', 'Sofia', 'Isaac',
        'Alexa', 'Jack', 'Camila', 'Jonathan', 'Anna', 'Luke', 'Nora', 'Owen', 'Penelope', 'Gavin',
        'Sarah', 'Wyatt', 'Elizabeth', 'Dylan', 'Mila', 'Nathan', 'Claire', 'Hunter', 'Aaliyah', 'Eli',
        'Stella', 'Isaiah', 'Gabriella', 'Julian', 'Lucy', 'Levi', 'Alyssa', 'Aaron', 'Taylor', 'Charles'
    ])
      this.age = 0
      this.sex = randomOptions(["Male", "Female"])
      this.happiness = randomNumberInRange(50, 60)
      this.health = randomNumberInRange(60, 80)
      this.smart = randomNumberInRange(30, 70)
      this.look = randomNumberInRange(20, 60)
      this.skills = 0
      this.university = ""
      this.bank = 0
      this.amount = 0
      this.relationShip = [],
      this.friendList = []
      this.course = []
      this.shop = []
      this.currentJob = null
      this.salary = 0
      this.elementarySchool = false
      this.secondarySchool = false
      this.higherEducation = false
      this.alive = true
      this.timesReceivedReward = 0
      this.dailyLoginStreak = [false, false, false, false,false,false,false]
      this.lastDayDailyReward = new Date("2004-04-27").getTime()
      this.wife = null
      this.mileStones = []
      this.deathReason = ""
    }
    
  }
  
  export default Player;
  