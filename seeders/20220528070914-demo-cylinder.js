'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cylinders',[
      {
        cylinder:'1',
        type:'4T',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cylinder:'2',
        type:'4T',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cylinder:'3',
        type:'4T',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cylinder:'4',
        type:'4T',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cylinder:'1',
        type:'2T',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        cylinder:'2',
        type:'2T',
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
