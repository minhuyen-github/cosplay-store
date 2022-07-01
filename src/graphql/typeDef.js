const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Query {
		orders: [Order!]
		series: [Series!]
		addOns: [AddOn!]
		addOnByName(name: String!): [AddOn!]
		order(id: ID!): Order
	}

	type Mutation {
		addSeries(series: SeriesInput!): Series!
		deleteSeries(id: ID!): Series!
		createAddOn(item: AddOnInput!): AddOn!
		deleteAddOn(id: ID!): AddOn!
		assignAddOnPrice(input: AddOnPriceInput!): AddOnPrice!
		addOrder(detail: OrderInput!): Order!
		updateOrder(id: ID!): Order!
		addPayment(value: PaymentInput!): Payment!
		updatePayment(id: ID!, status: PaymentStatus!): Payment!
	}

	enum OrderStatus {
		SHIPPED
		PROCESSING
		NOTRECEIVED
		RECEIVED
	}

	enum PaymentStatus {
    RECEIVED
    PROCESSING
    NONE
  }

	enum PaymentType {
    TRANSFER
    COD
  }

	input CustomerInput {
		name: String!
		phone: String!
		address: String!
	}

	input ProductInput {
		name: String!
		imgUrl: String!
		series: ID!
		description: String!
		price: Int!
		addon: AddOn
		status: 
		createdAt: Int!
		updatedAt: Int
	}

	input SeriesInput {
		name: String!
	}

	type AddOnPrice {
		productId: ID!
		addOnId: ID!
		price: Int!
	}

	input AddOnInput {
		name: String!
	}

	input AddOnPriceInput {
		productId: ID!
		addOnId: ID!
		price: Int!
	}

	input OrderInput {
		customerId: ID!
		paymentId: ID!
		product: [ID]!
		total: Int!
		from: String!
		to: String!
		status: OrderStatus!
	}

	input PaymentInput {
		amount: Int!
		type: PaymentType!
		status: PaymentStatus!
	}
`;
