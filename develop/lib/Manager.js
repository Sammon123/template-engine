// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        return Manager;

    }
    printInfo() {
        console.log(`My name is ${this.name}`);
        const manager = new Manager(Peter)
        printInfo(manager);
    }
}