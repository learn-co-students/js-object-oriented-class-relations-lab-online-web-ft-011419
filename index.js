// Scuber object oriented relations lab

// create global variables for store and ids
// create store object with a key pointing to an empty array
let store = {drivers: [], trips: [], passengers: []};
// create passengers id variable
let passengerId = 0;
// create trip id variable
let tripId = 0;
// create driver id variable
let driverId = 0;

// create class Driver that is initialized with a name, returns a javascript
// object
class Driver {
    constructor(name) {
        this.name = name;
        // increase the driver id integer for every new driver object
        this.id = ++driverId;
        // push the driver into the drivers set
        store.drivers.push(this)
    }

// filter through trips and passengers
    trips() {
        return store.trips.filter(function (trip) {
            // associate the driver id to the trip id
            return trip.driverId === this.id;
        }.bind(this))
    }

    passengers() {
        return this.trips().map(function (trip) {
            return trip.passenger()
        })
    }
}
// create passengers class that is initialized with a name and added to the
// passengers array when initialized

class Passenger {
    constructor(name) {
        this.name = name;
        // positive increment of the passenger id for every new passenger object
        this.id = ++passengerId;
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        )
    }
    drivers() {
        return this.trips().map(function (trip) {
                return trip.driver();
            }
        )
    }
}

// create class for trips that is initialized with a driver and a passenger
class Trip {
    constructor(driver, passenger) {
        // associate the drivers with the driver ids, as such with the
        // passengers
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        //  positive increment of the passenger id with each new passenger
        //  object
        this.id = ++tripId;
        //  store the strips
        store.trips.push(this);
    }
    driver() {
        // find driver and set its id
        return store.drivers.find(function (driver) {
            return driver.id === this.driverId;
        }.bind(this)
        )
    };
    passenger() {
        // find passenger and set their id
        return store.passengers.find(function (passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        )
    }
}