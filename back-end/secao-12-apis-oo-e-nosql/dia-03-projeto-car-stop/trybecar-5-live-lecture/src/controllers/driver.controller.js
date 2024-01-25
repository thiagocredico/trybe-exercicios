const { travelService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const openTravels = async (_req, res) => {
  const { status, data } = await travelService.getOpenTravels();
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateTravel = async (req, res) => {
  const { driverId, travelId } = req.params;  
  const { status, data } = await travelService.updateTravelStatus(driverId, travelId);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  openTravels,
  updateTravel,
};