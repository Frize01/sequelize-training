module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        { name: 'Admin', email: 'admin@example.com', password: 'hashed_password', createdAt: new Date(), updatedAt: new Date() },
      ]);
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    },
  };
  