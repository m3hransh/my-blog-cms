module.exports = {
  definition: ``,
  query: `postBySlug(slug: String!, publicationState: PublicationState!): Post`,
  type: {},
  resolver: {
    Query: {
      postBySlug: {
        description: 'Return the restaurants open by the chef',
        resolverOf: 'application::post.post.find',
        resolver: async (obj, options, { context }) => {
          const { _slug, _publicationState } = context.params
          console.log(_publicationState)
          const post = await strapi.services.post.findOne({ slug: _slug, _publicationState })
          return post ? post : null
        }
      }
    },
    Mutation: {},
  },
};