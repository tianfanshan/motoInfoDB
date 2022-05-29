'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Models',[
      {
        model:'HONDA CBR1000rr-r Fireblade',
        year:'2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'BMW R 1250 GS',
        year:'2021-2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'DUCATI Hypermotard 950',
        year:'2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'Husquarna 701 Enduro',
        year:'2021-2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'YAMAHA tenere 700',
        year:'2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'HONDA monkey 125',
        year:'2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'TRIUMPH bonnevelle bobber',
        year:'2021-2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        model:'KTM 125 duke',
        year:'2021-2022',
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
