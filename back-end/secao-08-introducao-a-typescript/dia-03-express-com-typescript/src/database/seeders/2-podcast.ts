import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface){
    return queryInterface.bulkInsert('podcasts', [
      {
        title: 'Podcast A',
        description: 'Descrição do Podcast A',
        url: 'https://example.com/podcast-a',
        host_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Podcast B',
        description: 'Descrição do Podcast B',
        url: 'https://example.com/podcast-b',
        host_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('podcasts', {})
  },
}
