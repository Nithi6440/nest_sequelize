module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: "4mantech@gmail.com",
      password: "$2a$12$bQ8Q9qGuS68h2YRmy1tfJObqJw2awXSf6Lxa/zdQfYNC92crSuDSe",
      firstName: "4man",
      lastName: "tech",
      role: "0",
      dnisAccess : `"[\\"0000\\",\\"0001\\"]"`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "admin@mail.com",
      password: "$2a$10$.6u8LbaVZ8poIc9JtmblXOzlMZHtVLQWwiqY6SyG0bDNffVRn9wTK",
      firstName: "admin",
      lastName: "admin",
      role: "0",
      dnisAccess : `"[\\"0000\\",\\"0001\\"]"`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};