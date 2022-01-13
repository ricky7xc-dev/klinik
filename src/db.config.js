module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "r4h4s14s4y4",
    DB: "learn_express",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };