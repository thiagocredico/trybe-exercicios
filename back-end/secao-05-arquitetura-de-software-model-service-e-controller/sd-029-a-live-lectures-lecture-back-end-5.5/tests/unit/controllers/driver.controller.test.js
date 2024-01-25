const chai = require('chai');

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { driverController } = require('../../../src/controllers');
const { travelService } = require('../../../src/services');
const { 
  updatedTravelFromModel, 
  travelFromServiceSuccessful, 
  travelFromServiceNotFound, 
  travelFromServiceConflict,
 } = require('../mocks/travel.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Realizando testes - Driver Controller:', function () {
  it('Alterando travel(status da corrida) com sucesso - Status 200', async function () {
    // AAA
    // Arranjo
    sinon.stub(travelService, 'updateTravelStatus')
      .resolves(travelFromServiceSuccessful);

    const req = {
      params: { driverId: 1, travelId: 42 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    
    const responseData = { ...updatedTravelFromModel };
    // AGE
    await driverController.updateTravel(req, res);

    // Asserção
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Não altera a travel quando passado um  driverId inexistente', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceNotFound);
    const req = {
      params: { driverId: 99999, travelId: 42 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const responseData = { ...travelFromServiceNotFound.data };
    await driverController.updateTravel(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(responseData);
  });

  it('Não altera travel tentando alterar o driverId já alocado', async function () {
    sinon.stub(travelService, 'updateTravelStatus').resolves(travelFromServiceConflict);

    const req = {
      params: { driverId: 1, travelId: 42 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const responseData = { ...travelFromServiceConflict.data };
    await driverController.updateTravel(req, res);

    expect(res.status).to.have.been.calledWith(409);
    expect(res.json).to.have.been.calledWith(responseData);
  });
  afterEach(function () {
    sinon.restore();
  });
});