//variables

let IdDriver = 0
let IdPassenger = 0
let IdTrip = 0

let store = { drivers: [], passengers: [], trips: []}


class Driver {
    constructor(name){
        this.id = ++IdDriver;
        this.name = name;

        store.drivers.push(this)
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id
            }.bind(this)
        )
    }

    passengers() {
        const trips = this.trips()
        return trips.map(
            function(trip) {
                return trip.passenger()
            }
        )
    }



}

class Passenger {
    constructor(name) {
        this.id = ++IdPassenger
        this.name = name

        store.passengers.push(this)
    }

    trips() {
        return store.trips.filter(
            function(trip){
                return trip.passengerId === this.id
            }.bind(this)
        )
    }

    drivers() {
        const trips = this.trips()
        return trips.map(
            function(trip){
                return trip.driver()
            }
        )
    }
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++IdTrip
        this.driverId = driver.id
        this.passengerId = passenger.id

        store.trips.push(this)
    }

    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        )
    }

    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId
            }.bind(this)
        )
    }
}