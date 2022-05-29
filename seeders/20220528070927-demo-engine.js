'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Engines',[
      {
        displacement:'1000cc',
        power:'215CV/14500rpm',
        torque:'112Nm/12500rpm',
        compression:'13.4:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'1254cc',
        power:'136CV/7750rpm',
        torque:'143Nm/6250rpm',
        compression:'12.5:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'937cc',
        power:'114CV/9000rpm',
        torque:'96Nm/7250rpm',
        compression:'13.1:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'1200cc',
        power:'77CV/6600rpm',
        torque:'106Nm/4000rpm',
        compression:'10.1:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'125cc',
        power:'15cv/10500rpm',
        torque:'12Nm/8000rpm',
        compression:'14.5:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'125cc',
        power:'9.8CV/7000rpm',
        torque:'10.9Nm/5250rpm',
        compression:'9.3:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'689cc',
        power:'73.4CV/9000rpm',
        torque:'68Nm/6500rpm',
        compression:'11.5:1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        displacement:'692cc',
        power:'74CV/8000rpm',
        torque:'71Nm/6750rpm',
        compression:'12.6:1',
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
