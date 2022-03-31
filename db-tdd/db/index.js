const client = require('./client');

/* 
    types of joins include

    INNER: both sides need to have a record
    OUTER: both sides can have nulls
    LEFT / RIGHT (OUTER): 




*/

const getUserById = async (userId) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      select
        users.*,
        case 
          when posts.user_id is null then '[]'::json
          else json_agg(posts.*) 
        end as posts
      from users
      left outer join posts on users.id = posts.user_id
      where users.id = $1
      group by users.id, posts.user_id;
    `,
      [userId]
    );

    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  client,
  // this entity can be thought of as a fake 'class'
  // with a static method that's available on the class itself
  User: {
    getUserById,
  },
};
