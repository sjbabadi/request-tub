/*

https://phoenixnap.com/kb/set-up-cron-job-linux

Setting up the cron job
1. chmod 755 trim
2. crontab -e
3. 0 * * * * /__path_to_trim__/trim

*/

const pool = require("./db/db");

await pool.query(
  "delete from bins where created_at < now() - interval '2 days';"
);
