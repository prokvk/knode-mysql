mysql = require 'mysql'

module.exports = (config) ->

	p_conn = null

	_getConnection = (done) ->
		p_conn = mysql.createConnection config.connection
		done null, p_conn

	getConnection: (done) ->
		return _getConnection done unless p_conn
		done null, p_conn

	query: (query, done) ->
		@getConnection (err, conn) -> conn.query query, done

	parseQueryResult: (rawResult) -> JSON.parse(JSON.stringify rawResult)
