const checkRequiredFields = require('../utils/checkRequiredFields');

const validateTravelWithWaypoints = (waypoints) => {
  const requiredWaypointsFields = ['address', 'stopOrder'];

  for (let i = 0; i < waypoints.length; i += 1) {
    const waypoint = waypoints[i];
    const error = checkRequiredFields(waypoint, requiredWaypointsFields);
    if (error) return error;
  }
};

const validateTravelFields = (req, res, next) => {
  const { body } = req;
  const requiredTravelFields = ['startingAddress', 'endingAddress'];

  const travelError = checkRequiredFields(body, requiredTravelFields);
  if (travelError) return res.status(400).json({ message: travelError });

  const { waypoints } = req.body;

  if (waypoints) {
    const waypointError = validateTravelWithWaypoints(waypoints);
    if (waypointError) return res.status(400).json({ message: waypointError });
  }

  next();
};

module.exports = validateTravelFields;
