module.exports = {
  definition: ``,
  query: `postBySlug(slug: String!): Post`,
  type: {},
  resolver: {
    Query: {
      postBySlug: {
        description: 'Return the restaurants open by the chef',
        resolverOf: 'application::post.post.find',
        resolver: async (obj, options, { context }) => {
          const { _slug } = context.params
          const post = await strapi.services.post.findOne({ slug: _slug })
          return post ? post : null
        }
      }
    },
    Mutation: {},
  },
};