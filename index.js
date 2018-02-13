const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./src/graph/schema');

const PORT = process.env.PORT || 4000;
const { log } = console;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, (err) => {
	if (err) throw err;

	log(`> API Server ready on port ${ PORT }`);
});
