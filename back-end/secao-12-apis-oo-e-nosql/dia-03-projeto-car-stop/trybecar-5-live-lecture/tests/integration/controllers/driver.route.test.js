const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);

const app = require('../../../src/app');
const connection = require('../../../src/models/connection');
const {
  driverFromDB,
  travelFromDB,
  updatedTravelFromDB,
  returnFromDB,
} = require('../mocks/driverRoute.mock');

describe('Realizando testes(integração) - DRIVER ROUTE:', function () {
  it('Alterando travel(status da corrida) com sucesso', async function () {
    this.timeout(5000);

    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([[driverFromDB]])
      .onSecondCall()
      .resolves([[travelFromDB]])
      .onCall(2)
      .resolves([[returnFromDB]])
      .onCall(3)
      .resolves([[updatedTravelFromDB]]);

    const response = await chai.request(app).patch('/drivers/4/travels/42');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({
      id: 42,
      driverId: 1,
      startingAddress: 'starting street',
      endingAddress: 'end street',
      requestDate: '2023-05-29T19:56:25.000Z',
      travelStatusId: 2,
      status: 'Motorista a caminho',
      waypoints: [],
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
