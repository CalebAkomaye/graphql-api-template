export const typeDefs = `#graphql
type Joke{
      id:ID!,
      setup: String
      punchline: String!,
      category: String
}
type Author{
      id: ID!,
      name: String!
      email: String
}
type Review{
      id: ID!,
      rating: Int!,
}

type Query{
      jokes: [Joke]
      joke(id: ID!): Joke
      authors: [Author]
      author(id: ID!): Author
      reviews: [Review]
}
`;
