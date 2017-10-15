

const schoolInfoSysRoutes = require('./school_info_sys_routes');
module.exports = function(app, db) {
  schoolInfoSysRoutes(app, db);
  // Other route groups could go here, in the future
  app.post('/students', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
};