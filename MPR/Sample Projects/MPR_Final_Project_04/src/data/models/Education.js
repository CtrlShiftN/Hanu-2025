export class Course {
    constructor(id, name, university, money, time, startDate, endDate, certificate) {
        this.id = id,
            this.name = name,
            this.university = university,
            this.money = money,
            this.time = time,
            this.startDate = startDate,
            this.endDate = endDate,
            this.certificate = certificate
    }
}
export class University {
    constructor(id, name, ranking, moneyEachYear, time, subjects, status, address, scholorShip, description) {
        this.id = id,
            this.name = name,
            this.ranking = ranking,
            this.moneyEachYear = moneyEachYear,
            this.time = time,
            this.subjects = subjects,
            this.status = status,
            this.description = description,
            this.address = address,
            this.scholorShip = scholorShip
    }
}
export class Subject {
    constructor(id, name, time, startDate, endDate, description, require) {
        this.id = id,
            this.name = name,
            this.time = time,
            this.startDate = startDate,
            this.endDate = endDate,
            this.description = description,
            this.require = require
    }
}