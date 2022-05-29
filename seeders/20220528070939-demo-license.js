'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Licenses',[
      {
        license:'A',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      license:'A2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      license:'A1-B',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      license:'AM',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
