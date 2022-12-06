const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Number
    tech2_votes: Number
  }
  type Tech {
    _id: ID
    name: String
  }
  type Query {
    matchup(_id: String!): [Matchup]
    tech: [Tech]
  }

  type Mutataion {
    chooseTech(tech1: String!, tech2: String!): Matchup
    addvote(_id: String!, techNum: Integer!): Matchup
  }
`;

module.exports = typeDefs;
