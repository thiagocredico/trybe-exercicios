const validPassword = 'chang3m3';
const validEmail = 'host1@email.com';
const noEmailLoginBody = { email: '', password: validPassword };
const noPasswordLoginBody = { email: validEmail, password: '' };
const notExistingHostBody = { email: 'notfound@email.com', password: validPassword };
const existingHostWithWrongPasswordBody = { email: validEmail, password: 'wrong_password' };
const hashPassword = '$2a$12$cz1VDt6MEbvl7sn6Lju2buiVLyp2rU3m2zs8x0PosEhSKeDMFN5n.';

const existingHostWithoutHash = {
  id: 1,
  email: validEmail,
  password: validPassword,
  name: 'Host 1',
};

const existingHostWithHash = {
  id: 1,
  email: validEmail,
  password: hashPassword,
  name: 'Host 1',
};

const validLoginBody = { email: validEmail, password: validPassword };

export default {
  noEmailLoginBody,
  noPasswordLoginBody,
  notExistingHostBody,
  existingHostWithWrongPasswordBody,
  existingHostWithHash,
  existingHostWithoutHash,
  validLoginBody,
};
