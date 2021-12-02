import pkg from "../package.json";
import schemas from "./schemas/index.js";
import queries from "./queries/index.js";
import mutations from "./mutations/index.js";
import resolvers from "./resolvers/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Plugin Modifier groups",
    name: "modifier-groups",
    version: pkg.version,
    collections: {
      ModifierGroups: {
        name: "ModifierGroups"
      }
    },
    queries,
    mutations,
    graphQL: {
      schemas,
      resolvers
    }
  });
}
