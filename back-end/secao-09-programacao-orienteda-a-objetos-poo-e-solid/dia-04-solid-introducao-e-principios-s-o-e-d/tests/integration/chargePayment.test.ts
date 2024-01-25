import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando processamento de pagamento', function () {
  describe('Ao efetuar um pagamento', function () {
    it('Retorna status com sucesso', async function () {
      const response = await chai
        .request(app)
        .post('/checkout')
        .send({ value: 30 });
      expect(response.status).to.be.equal(200);
      expect(response.body.confirmed).to.equal(true);
    });
  });
});
