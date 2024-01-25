import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('hosts', [
      {
        email: 'host1@email.com',
        password: 'chang3m3',
        name: 'Host 1'
      },
      {
        email: 'host2@email.com',
        password: 'chang3m3',
        name: 'Host 2'
      },
    ])
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('hosts', {})
  },
}
