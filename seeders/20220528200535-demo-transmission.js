'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transmissions',[
      {
        type:'shaft transmission',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'chain transmission',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'belt transmission',
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
