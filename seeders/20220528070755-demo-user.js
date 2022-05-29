'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[
      {
        name:'Jorge',
        email:'jorge@gmail.com',
        password:'jorge123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Patricia',
        email:'patricia@gmail.com',
        password:'patricia123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Antonio',
        email:'antonio@gmail.com',
        password:'antonio123456',
        role:'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Carmen',
        email:'carmen@gmail.com',
        password:'carmen123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Pedro',
        email:'pedro@gmail.com',
        password:'pedro123456',
        role:'user',
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
