const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "swaliya123",
});

let q = "SHOW TABLES";

connection.query(q, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
     console.log(result.length);
      console.log(result[0]);
       console.log(result[1]);
});

connection.end();

let getRandomUser = () => {
    return {
        Id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

console.log(getRandomUser());