const path = require('path');
const fsPromises = require('fs/promises');
const client = require('../client');

module.exports = {
  getAllNextTrains,
  getNextTrainScheduleByTrainId,
};

// helper function builds query strings from sql files
async function loadQuery(pathArray) {
  try {
    return (
      await fsPromises.readFile(path.resolve(__dirname, ...pathArray))
    ).toString();
  } catch (err) {
    throw err;
  }
}

async function getAllNextTrains({ stationId, timeIn, timeOut }) {
  try {
    const allNextTrainsScheduleQuery = await loadQuery([
      '..',
      'sql',
      'queries',
      'all-next-trains-by-station-id-within-timein-timeout.sql',
    ]);

    console.log(allNextTrainsScheduleQuery);

    const { rows: nextTrains } = await client.query(
      allNextTrainsScheduleQuery,
      [stationId, timeIn, timeOut]
    );

    return nextTrains;
  } catch (err) {
    throw err;
  }
}

async function getNextTrainScheduleByTrainId({
  stationId,
  trainId,
  timeIn,
  timeOut,
}) {
  try {
    const nextTrainScheduleQuery = await loadQuery([
      '..',
      'sql',
      'queries',
      'next-train-by-station-id-and-train-id-within-timein-timeout.sql',
    ]);

    const { rows: nextTrains } = await client.query(nextTrainScheduleQuery, [
      stationId,
      trainId,
      timeIn,
      timeOut,
    ]);

    return nextTrains;
  } catch (err) {
    throw err;
  }
}
