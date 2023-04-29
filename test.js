const QueryBuilder = require('./src/QueryBuilder.js');

const query = QueryBuilder

query.match({name: "john"})
.when(1 === 1, (query) => query.sort({email: 1}))

console.log(JSON.stringify(query.get(), null, 4));
