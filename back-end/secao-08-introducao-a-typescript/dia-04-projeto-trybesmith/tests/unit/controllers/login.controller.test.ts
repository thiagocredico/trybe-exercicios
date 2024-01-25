import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import loginController from '../../../src/controllers/login.controller';
import loginService from '../../../src/services/login.service';
import loginMock from '../../mocks/login.mock';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const messageEmailOrPasswordEmpty = 'Dados inválidos';
  const messageEmailOrPasswordInvalid = 'E-mail ou senha inválidos';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('#login', function () {
    it('ao não enviar um e-mail, devolve um erro!', async function () {
      // Arrange
      req.body = loginMock.noEmailLoginBody;
      sinon.stub(loginService, 'verifyLogin').resolves({
        status: 'INVALID_DATA',
        data: { message: messageEmailOrPasswordEmpty },
      });
      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordEmpty });
    });

    it('ao não enviar uma senha, devolve um erro!', async function () {
      // Arrange
      req.body = loginMock.noPasswordLoginBody;
      sinon.stub(loginService, 'verifyLogin').resolves({
        status: 'INVALID_DATA',
        data: { message: messageEmailOrPasswordEmpty },
      });
      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordEmpty });
    });

    it('ao enviar um e-mail inexistente, devolve um erro!', async function () {
      // Arrange
      req.body = loginMock.notExistingHostBody;
      sinon.stub(loginService, 'verifyLogin').resolves({
        status: 'UNAUTHORIZED',
        data: { message: messageEmailOrPasswordInvalid },
      });

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordInvalid });
    });

    it('ao enviar um e-mail existente e uma senha errada, devolve um erro!', async function () {
      // Arrange
      req.body = loginMock.existingHostWithWrongPasswordBody;
      sinon.stub(loginService, 'verifyLogin').resolves({
        status: 'UNAUTHORIZED',
        data: { message: messageEmailOrPasswordInvalid },
      });

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({ message: messageEmailOrPasswordInvalid });
    });

    it('ao enviar um e-mail e uma senha válida, devolve um token!', async function () {
      // Arrange
      req.body = loginMock.validLoginBody;
      const serviceResponse = { token: '1234' };
      sinon.stub(loginService, 'verifyLogin').resolves({
        status: 'SUCCESSFUL',
        data: serviceResponse,
      });

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(serviceResponse);
    });
  });
});