// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getRole() {
        console.log(`${Intern}`);

    }
}

const employeeProperties = new Intern('Sammon', 3, 'peter1@gmail.com', 'sammon007')

internProperties.getRole();