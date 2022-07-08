const mutations = `
    addSeries(name: String!): Series!
		deleteSeries(id: ID!): Series!
    updateSeries(id: ID!, updateName: String!): Series!
`;

module.exports = mutations;
