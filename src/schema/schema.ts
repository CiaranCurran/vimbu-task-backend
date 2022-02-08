import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { Instructor } from "../entity/instructor";
import { Resort } from "../entity/resort";

const ResortType = new GraphQLObjectType({
  name: "resort",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    resort: {
      type: ResortType,
      args: { id: { type: GraphQLString } },
      resolve: async (parent, args) => {
        const resort = await Resort.findOne(args.id);
        return resort;
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addResort: {
      type: ResortType,
      args: {
        name: { type: GraphQLString },
        country: { type: GraphQLString },
      },
      resolve(parent, args: Object) {
        console.log("creating resort");
        const resort = Resort.create(args);
        return resort.save();
      },
    },
  },
});

export default new GraphQLSchema({
  query: rootQuery,
  mutation: Mutations,
});
