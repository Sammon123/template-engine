// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getRole() {
        console.log(`${Employee}`);

    }
}

const employeeProperties = new Employee('Peter', 1, 'petersammon2@gmail.com', 'sammon123')

employeeProperties.getRole();