import { expect } from 'chai';
import sinon from 'sinon';

import HostModel from '../../../src/database/models/host.model';
import loginService from '../../../src/services/login.service';
import loginMock from '../../mocks/login.mock';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('#verifyLogin', function () {
    it('ao não enviar um e-mail, devolve um erro!', async function () {
      // Arrange
      // Act
      const serviceResponse = await loginService.verifyLogin(loginMock.noEmailLoginBody);
      // Assert
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: 'Dados inválidos' });
    });

    it('ao não enviar uma senha, devolve um erro!', async function () {
      // Arrange
      // Act
      const serviceResponse = await loginService.verifyLogin(loginMock.noPasswordLoginBody);
      // Assert
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: 'Dados inválidos' });
    });

    it('ao enviar um e-mail inexistente, devolve um erro!', async function () {
      // Arrange
      sinon.stub(HostModel, 'findOne').resolves(null);
      // Act
      const serviceResponse = await loginService.verifyLogin(loginMock.notExistingHostBody);
      // Assert
      expect(serviceResponse.status).to.eq('UNAUTHORIZED');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: 'E-mail ou senha inválidos' });
    });

    it('ao enviar um e-mail existente e uma senha errada, devolve um erro!', async function () {
      // Arrange
      const hostInstance = HostModel.build(loginMock.existingHostWithHash);
      sinon.stub(HostModel, 'findOne').resolves(hostInstance);
      // Act
      const serviceResponse = await loginService
        .verifyLogin(loginMock.existingHostWithWrongPasswordBody);
      // Assert
      expect(serviceResponse.status).to.eq('UNAUTHORIZED');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: 'E-mail ou senha inválidos' });
    });

    it('ao enviar um e-mail e uma senha válida, devolve um token!', async function () {
      // Arrange
      const hostInstance = HostModel.build(loginMock.existingHostWithHash);
      sinon.stub(HostModel, 'findOne').resolves(hostInstance);
      // Act
      const serviceResponse = await loginService.verifyLogin(loginMock.validLoginBody);
      // Assert
      expect(serviceResponse.status).to.eq('SUCCESSFUL');
      expect(serviceResponse.data).to.have.key('token');
    });
  });
});