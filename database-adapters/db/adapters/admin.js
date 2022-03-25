const client = require('../client');

module.exports = {
  checkAdmin,
};

async function checkAdmin({ adminId }) {
  try {
    const {
      rows: [{ is_admin }],
    } = await client.query(
      `
      SELECT COUNT(*) AS is_admin FROM admins
      WHERE user_id=$1;
    `,
      [adminId]
    );

    const isAdmin = is_admin === '1';
    return isAdmin;
  } catch (err) {
    throw err;
  }
}
