import bcrypt from 'bcryptjs';
import { QueryInterface } from 'sequelize';

// register(name, email, password)
// const hashedPassoword = bcrypt.hashSync(password, 10)
// HostModel.create({name, email, hashedPassoword })

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('hosts', [
      {
        email: 'host1@email.com',
        password: bcrypt.hashSync('chang3m3', SALT_ROUNDS),
        name: 'Host 1'
      },
      {
        email: 'host2@email.com',
        password: bcrypt.hashSync('chang3m3', SALT_ROUNDS),
        name: 'Host 2'
      },
    ])
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('hosts', {})
  },
}
