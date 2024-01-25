import * as chai from 'chai';
import App from '../../src/App';

// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Testando a rota /', () => {

  const app = new App().app;

    it('Testa se a rota / está funcionando', async () => {
      const { status, text } = await chai.request(app).get('/');
      chai.expect(status).to.be.equal(200);
      chai.expect(text).to.be.equal('Trybeteca API no ar!');
    });
  });
