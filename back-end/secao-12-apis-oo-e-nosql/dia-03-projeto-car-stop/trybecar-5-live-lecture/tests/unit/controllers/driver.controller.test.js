const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { travelService } = require('../../../src/services');
const { driverController } = require('../../../src/controllers');
const {
  travelFromServiceSuccessful,
  updatedTravelFromModel,
  travelFromServiceNotFound,
  travelFromServiceConflict,
} = require('../mocks/travel.mock');

describe('Realizando testes - DRIVER CONTROLLER:', function () {
  it('Alterando travel(status da corrida) com sucesso - status 200', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceSuccessful);
    const req = {
      params: { driverId: 1, travelId: 42 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.updateTravel(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedTravelFromModel);
  });

  it('Não altera travel com driverId inexistente - status 404', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceNotFound);
    const req = {
      params: { driverId: 999999, travelId: 42 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.updateTravel(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Não altera travel com travelId inexistente - status 404', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceNotFound);
    const req = {
      params: { driverId: 1, travelId: 999999 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.updateTravel(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Não altera travel tentando alterar driverId já alocado - status 409', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceConflict);

    const req = {
      params: { driverId: 1, travelId: 42 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.updateTravel(req, res);
    expect(res.status).to.have.been.calledWith(409);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  it('Não altera travel quando a corrida já foi finalizada - status 409', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceConflict);

    const req = {
      params: { driverId: 1, travelId: 42 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await driverController.updateTravel(req, res);
    expect(res.status).to.have.been.calledWith(409);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });

  afterEach(function () {
    sinon.restore();
  });
});
