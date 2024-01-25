import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando cálculo de tarifa', function () {
  describe('Ao chamar o método POST/fare/calculate', function () {
    it('Retorna a tarifa da viagem', async function () {
      const response = await chai
        .request(app)
        .post('/fare/calculate')
        .send({ locationStart: 10, locationEnd: 20 });
      expect(response.status).to.be.equal(200);
      expect(response.body.fare).to.equal(5);
    });
  });

  it('Retorna a tarifa da viagem de fim de semana', async function () {
    const response = await chai
      .request(app)
      .post('/fare/calculate')
      .send({
        locationStart: 10,
        locationEnd: 20,
        requestDate: '2023-08-12T12:00:00',
      });
    expect(response.status).to.be.equal(200);
    expect(response.body.fare).to.be.equal(7.5);
  });

  it('Retorna a tarifa da viagem noturna', async function () {
    const response = await chai
      .request(app)
      .post('/fare/calculate')
      .send({
        locationStart: 10,
        locationEnd: 20,
        requestDate: '2023-08-14T23:00:00',
      }); // Sexta à noite
    expect(response.status).to.be.equal(200);
    expect(response.body.fare).to.equal(7.5);
  });

  it('Retorna a tarifa da viagem de fim de semana noturna', async function () {
    const response = await chai
      .request(app)
      .post('/fare/calculate')
      .send({
        locationStart: 10,
        locationEnd: 20,
        requestDate: new Date('2023-08-12T23:00:00'),
      }); // Sábado à noite
    expect(response.status).to.be.equal(200);
    expect(response.body.fare).to.equal(10);
  });
});
