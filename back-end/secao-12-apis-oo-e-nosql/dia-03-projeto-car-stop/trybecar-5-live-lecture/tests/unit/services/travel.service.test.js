const { expect } = require('chai');
const sinon = require('sinon');
const { passengerModel, travelModel, driverModel } = require('../../../src/models');
const { travelService } = require('../../../src/services');
const { passengerFromModel } = require('../mocks/passenger.mock');
const {
  travelIdFromModel,
  travelFromModel,
  travelWithWaypointsFromModel,
  travelByStatusFromModel,
  returnFromDB,
  updatedTravelFromModel,
  finishedTravelFromModel,
} = require('../mocks/travel.mock');
const { driverFromModel } = require('../mocks/driver.mock');

describe('Realizando testes - TRAVEL SERVICE:', function () {
  it('Inserindo travel sem waypoints com sucesso', async function () {
    sinon.stub(passengerModel, 'findById').resolves(passengerFromModel);
    sinon.stub(travelModel, 'insert').resolves(travelIdFromModel);
    sinon.stub(travelModel, 'findById').resolves(travelFromModel);

    const inputData = {
      passengerId: 1,
      startingAddress: 'starting street',
      endingAddress: 'end street',
    };
    const responseData = {
      id: 42,
      driverId: null,
      startingAddress: 'starting street',
      endingAddress: 'end street',
      requestDate: '2023-05-29T19:56:25.000Z',
      travelStatusId: 1,
      status: 'Aguardando Motorista',
      waypoints: [],
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Inserindo travel com waypoints com sucesso', async function () {
    sinon.stub(passengerModel, 'findById').resolves(passengerFromModel);
    sinon.stub(travelModel, 'insert').resolves(travelIdFromModel);
    sinon.stub(travelModel, 'findById').resolves(travelWithWaypointsFromModel);

    const inputData = {
      passengerId: 1,
      startingAddress: 'Rua dos caramelos',
      endingAddress: 'Rua Mariana Alvarez Dutra',
      waypoints: [
        { address: 'Rua Quatro de Março', stopOrder: 1 },
        { address: 'Rua Sete de Setembro', stopOrder: 2 },
      ],
    };
    const responseData = {
      id: 1,
      driverId: null,
      startingAddress: 'Rua dos caramelos',
      endingAddress: 'Rua Mariana Alvarez Dutra',
      requestDate: '2023-05-29T19:56:52.000Z',
      travelStatusId: 1,
      status: 'Aguardando Motorista',
      waypoints: [
        { address: 'Rua Quatro de Março', stopOrder: 1 },
        { address: 'Rua Sete de Setembro', stopOrder: 2 },
      ],
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data.waypoints).to.have.lengthOf(2);
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Não insere travel com endereços iguais', async function () {
    const inputData = {
      passengerId: 1,
      startingAddress: 'same street',
      endingAddress: 'same street',
    };

    const responseService = await travelService.requestTravel(inputData);
    expect(responseService.status).to.equal('INVALID_VALUE');
    expect(responseService.data.message).to.equal('"endingAddress" contains an invalid value');
  });

  it('Recuperando travels em aberto com sucesso', async function () {
    sinon.stub(travelModel, 'findByStatus').resolves(travelByStatusFromModel);
    const responseData = [{
      id: 1,
      driverId: null,
      startingAddress: 'Rua dos caramelos',
      endingAddress: 'Rua Mariana Alvarez Dutra',
      requestDate: '2023-05-29T19:56:52.000Z',
      amountStop: 2,
    },
    {
      id: 42,
      driverId: null,
      startingAddress: 'starting street',
      endingAddress: 'end street',
      requestDate: '2023-05-29T19:56:25.000Z',
      amountStop: 0,
    }];

    const responseService = await travelService.getOpenTravels();
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Não recupera travels caso não tenha', async function () {
    sinon.stub(travelModel, 'findByStatus').resolves([]);

    const responseService = await travelService.getOpenTravels();
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data.message).to.equal('There are no open trips');
  });

  it('Alterando travel(status da corrida) com sucesso', async function () {
    sinon.stub(driverModel, 'findById').resolves(driverFromModel);
    sinon.stub(travelModel, 'findById')
      .onFirstCall()
      .resolves(travelFromModel)
      .onSecondCall()
      .resolves(updatedTravelFromModel);
    sinon.stub(travelModel, 'update').resolves(returnFromDB);

    const responseData = {
      id: 42,
      driverId: 1,
      startingAddress: 'starting street',
      endingAddress: 'end street',
      requestDate: '2023-05-29T19:56:25.000Z',
      travelStatusId: 2,
      status: 'Motorista a caminho',
      waypoints: [],
    };

    const inputDataDriverId = 1;
    const inputDataTravelId = 42;
    const responseService = await travelService.updateTravelStatus(
      inputDataDriverId,
      inputDataTravelId,
    );

    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(responseData);
  });

  it('Não altera travel com driverId inexistente', async function () {
    sinon.stub(driverModel, 'findById').resolves(undefined);

    const inputDataDriverId = 999999;
    const inputDataTravelId = 42;
    const responseService = await travelService.updateTravelStatus(
      inputDataDriverId,
      inputDataTravelId,
    );

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data.message).to.equal('Driver not found');
  });

  it('Não altera travel com travelId inexistente', async function () {
    sinon.stub(driverModel, 'findById').resolves(driverFromModel);
    sinon.stub(travelModel, 'findById').resolves(undefined);

    const inputDataDriverId = 1;
    const inputDataTravelId = 999999;
    const responseService = await travelService.updateTravelStatus(
      inputDataDriverId,
      inputDataTravelId,
    );

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data.message).to.equal('Travel not found');
  });

  it('Não altera travel tentando alterar driverId já alocado', async function () {
    sinon.stub(driverModel, 'findById').resolves(driverFromModel);
    sinon.stub(travelModel, 'findById').resolves(updatedTravelFromModel);

    const inputDataDriverId = 5;
    const inputDataTravelId = 42;
    const responseService = await travelService.updateTravelStatus(
      inputDataDriverId,
      inputDataTravelId,
    );

    expect(responseService.status).to.equal('CONFLICT');
    expect(responseService.data.message).to.equal('Travel already assigned');
  });

  it('Não altera travel quando a corrida já foi finalizada', async function () {
    sinon.stub(driverModel, 'findById').resolves(driverFromModel);
    sinon.stub(travelModel, 'findById').resolves(finishedTravelFromModel);

    const inputDataDriverId = 1;
    const inputDataTravelId = 42;
    const responseService = await travelService.updateTravelStatus(
      inputDataDriverId,
      inputDataTravelId,
    );

    expect(responseService.status).to.equal('CONFLICT');
    expect(responseService.data.message).to.equal('Travel already finished');
  });

  afterEach(function () {
    sinon.restore();
  });
});