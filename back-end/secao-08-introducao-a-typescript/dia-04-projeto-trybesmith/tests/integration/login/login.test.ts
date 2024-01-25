import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import app from '../../../src/app';
import HostModel from '../../../src/database/models/host.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', () => {
  beforeEach(() => { sinon.restore(); });

  it('ao não enviar um e-mail, devolve um erro!', async () => {
    // Arrange - configuro as depencias do meu test

    // Act - ato de chamar a funcao a ser testada
    // app === http:localhost:3999/login
    const httpResponse = await chai.request(app).post('/login').send(loginMock.noEmailLoginBody);

    // Assert - é onde verificamos o resultado esperado
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('ao não enviar uma senha, devolve um erro!', async () => {
    // Arrange

    // Act
    const httpResponse = await chai.request(app).post('/login').send(loginMock.noPasswordLoginBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('ao enviar um e-mail inexistente, devolve um erro!', async () => {
    // Arrange
    sinon.stub(HostModel, 'findOne').resolves(null);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(loginMock.notExistingHostBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('ao enviar um e-mail existente e uma senha errada, devolve um erro!', async () => {
    // Arrange
    const hostInstance = HostModel.build(loginMock.existingHostWithHash);
    sinon.stub(HostModel, 'findOne').resolves(hostInstance);

    // Act
    const httpResponse = await chai.request(app).post('/login')
      .send(loginMock.existingHostWithWrongPasswordBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('ao enviar um e-mail e uma senha válida, devolve um token!', async () => {
    // Arrange
    const hostInstance = HostModel.build(loginMock.existingHostWithHash);
    sinon.stub(HostModel, 'findOne')
      .resolves(hostInstance);// é utilizado para promises (async/await)
    // .returns -> é sincrono 

    // Act
    const httpResponse = await chai.request(app).post('/login').send(loginMock.validLoginBody);

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});