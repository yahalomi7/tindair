import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int
    yehida: String!
    email: String!
    createdAt: String!
  }

  type Swipe {
    id: ID!
    fromUser: User!
    toUser: User!
    liked: Boolean!
    createdAt: String!
  }

  type Match {
    id: ID!
    users: [User!]!
    createdAt: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    swipesByUser(userId: ID!): [Swipe!]!
    matchesByUser(userId: ID!): [Match!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    swipe(input: SwipeInput!): Swipe!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
    yehida: String!
  }

  input SwipeInput {
    fromUserId: ID!
    toUserId: ID!
    liked: Boolean!
  }
`;
