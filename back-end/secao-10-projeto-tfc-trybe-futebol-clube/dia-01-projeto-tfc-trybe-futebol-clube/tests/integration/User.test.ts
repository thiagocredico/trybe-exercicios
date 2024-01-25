import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import App from '../../src/App';
import JWT from '../../src/utils/JWT';
import { user, users, userWithoutPassword } from '../mocks/User.mocks';

// @ts-ignore

import SequelizeUser from '../../src/database/models/SequelizeUser';

chai.use(chaiHttp);

const { expect } = chai;

const { app } = new App();

describe('Users Test', function() {
  it('should return all users', async function() {
    sinon.stub(SequelizeUser, 'findAll').resolves(users as any);

    const { status, body } = await chai.request(app).get('/users');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(users);
  });

  it('should return a user by id', async function() {
    sinon.stub(SequelizeUser, 'findByPk').resolves(userWithoutPassword as any);

    const { status, body } = await chai.request(app).get('/users/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(userWithoutPassword);
  });

  it('should return a message when user is not found', async function() {
    sinon.stub(SequelizeUser, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).get('/users/1');

    expect(status).to.equal(404);
    expect(body.message).to.equal('User not found');
  });
  it('criar um usuario', async function () {
    sinon.stub(SequelizeUser, 'create').resolves(user as any);
    sinon.stub(SequelizeUser, 'findOne').resolves(null);
    sinon.stub(JWT, 'verify').returns('');
    const {id,name,email,password} = user
    const result = await chai.request(app)
    .post('/users/register')
    .set('authorization', 'token magico')
    .send({name,email,password});

    expect(result.status).to.be.equal(201);
    expect(result.body).to.be.deep.equal({ id,name,email})
  })
  it('nao cria com email faltando', async function () {

    const result = await chai.request(app).post('/users/register')
    .send({name: 'nomeDeTest', password: '123456789'});

    expect(result.status).to.be.equal(400);
    expect(result.body.message).to.be.equal('email is required')
  })

  it('nao cria com password faltando', async function () {

    const result = await chai.request(app).post('/users/register')
    .send({name: 'nomeDeTest', email: 'test@test.com'});

    expect(result.status).to.be.equal(400);
    expect(result.body.message).to.be.equal('password is required')
  })
  it('nao cria com name faltando', async function () {

    const result = await chai.request(app).post('/users/register')
    .send({password: 'nomeDeTest', email: 'test@test.com'});

    expect(result.status).to.be.equal(400);
    expect(result.body.message).to.be.equal('name is required')
  })

  it('Nao cadastra sem estar logada', async function () {
    const result = await chai.request(app).post('/users/register')
    .send({password: 'nomeDeTest', email: 'test@test.com', name: 'testPessoa'});

    expect(result.status).to.be.equal(401);
    expect(result.body.message).to.be.equal('Token not found')
  })
  afterEach(sinon.restore);
});
