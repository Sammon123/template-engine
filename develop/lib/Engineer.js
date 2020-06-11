// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;


    }
    getRole() {
        console.log(`${Engineer}`);

    }
}

const engineerProperties = new Engineer('John', 2, 'sammon3@gmail.com', 'sammon125');