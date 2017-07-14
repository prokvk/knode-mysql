(function() {
  var mysql;

  mysql = require('mysql');

  module.exports = function(config) {
    var _getConnection, p_conn;
    p_conn = null;
    _getConnection = function(done) {
      p_conn = mysql.createConnection(config.connection);
      return done(null, p_conn);
    };
    return {
      getConnection: function(done) {
        if (!p_conn) {
          return _getConnection(done);
        }
        return done(null, p_conn);
      },
      query: function(query, done) {
        return this.getConnection(function(err, conn) {
          return conn.query(query, done);
        });
      },
      parseQueryResult: function(rawResult) {
        return JSON.parse(JSON.stringify(rawResult));
      }
    };
  };

}).call(this);
