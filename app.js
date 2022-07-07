const express = require('express');
const http = require('http');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const startApolloServer = async () => {
	// Required logic for integrating with Express
	const app = express();
	const httpServer = http.createServer(app);

	// Same ApolloServer initialization as before, plus the drain plugin.
	const server = new ApolloServer({
		typeDefs: typeDefs,
		resolvers: resolvers,
		csrfPrevention: true,
		cache: 'bounded',
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	// More required logic for integrating with Express
	await server.start();
	server.applyMiddleware({
		app,
		// By default, apollo-server hosts its GraphQL endpoint at the
		// server root. However, *other* Apollo Server packages host it at
		// /graphql. Optionally provide this to match apollo-server.
		path: '/api',
	});

	// Modified server startup
	await new Promise((resolve) =>
		httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
	);
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer();
