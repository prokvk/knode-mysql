knode-mysql
===========

is a simple node module wrapper on `mysql`.

# Install:

```
npm install --save knode-mysql
```

# Usage:

## Config sample

```
mysql:
	connection: "mysql://#{process.env.MYSQL_USER}:#{process.env.MYSQL_PASS}@#{process.env.MYSQL_HOST}/<DB_NAME>"
```

remember to replace `<DB_NAME>`

## JS sample

```javascript
mysql.query('SELECT count(*) count FROM users', function(err, out) {
  if (err) {
    console.log("ERROR: " + err);
  }
  return console.log(out);
});
```