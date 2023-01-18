// const mysql = require('mysql')
var mysql = require('mysql');
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.MYSQL_DB,
//     connectionLimit: 10
// });


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name)
    )`;
let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,        
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;


let question = `CREATE TABLE IF NOT EXISTS question(
    question_id int auto_increment,
    question varchar(255) NOT NULL,
    question_description varchar(255),
    question_code_block varchar(255),
    tags varchar(255),
    post_id varchar(255) NOT NULL,
    user_id int NOT NULL,
    PRIMARY KEY (question_id),
    UNIQUE KEY(post_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;

let answer = `CREATE TABLE IF NOT EXISTS answer(
    answer_id int auto_increment,
    answer varchar(255) NOT NULL,
    answer_code_block varchar(255),
    user_id int NOT NULL,
    question_id int NOT NULL,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (question_id) REFERENCES question(question_id)

)`;

pool.query(registration, (err, results) => {
    if(err) throw err;
    console.log('registration table created');
})

pool.query(profile, (err, results) => {
    if(err) throw err;
    console.log('profile table created');
})

pool.query(question, (err, results) => {
    if(err) throw err;
    console.log('question table created');
})

pool.query(answer, (err, results) => {
    if(err) throw err;
    console.log('answer table created');
})

module.exports = pool;