'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types',[
      {
        type:'Sport',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'Naked',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'Trail',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'Costums',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'Supermoto',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        type:'Scooters',
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
