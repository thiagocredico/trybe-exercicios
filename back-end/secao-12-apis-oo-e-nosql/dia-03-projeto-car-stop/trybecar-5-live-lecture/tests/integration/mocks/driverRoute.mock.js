const travelFromDB = {
  id: 42,
  driver_id: null,
  starting_address: 'starting street',
  ending_address: 'end street',
  request_date: '2023-05-29T19:56:25.000Z',
  travel_status_id: 1,
  status: 'Aguardando Motorista',
  address: null,
  stop_order: null,
};
const driverFromDB = { id: 4, name: 'Samara Granjeiro' };
const returnFromDB = [{
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1,
  },
  undefined,
];

const updatedTravelFromDB = {
  id: 42,
  driver_id: 1,
  starting_address: 'starting street',
  ending_address: 'end street',
  request_date: '2023-05-29T19:56:25.000Z',
  travel_status_id: 2,
  status: 'Motorista a caminho',
  address: null,
  stop_order: null,
};

module.exports = {
  travelFromDB,
  driverFromDB,
  returnFromDB,
  updatedTravelFromDB,
}