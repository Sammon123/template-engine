// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log(`${Manager}`);

    }
}

const managerProperties = new Manager('Ron', 4, 'goodwin4@gmail.com', 'sammon123')

managerProperties.getRole();