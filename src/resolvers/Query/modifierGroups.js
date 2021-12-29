import { decodeModifierGroupOpaqueId, decodeShopOpaqueId } from "../../xforms/id.js";
import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import wasFieldRequested from "@reactioncommerce/api-utils/graphql/wasFieldRequested.js";

/**
 * @name Query/ModifierGroups
 * @method
 * @memberof ModifierGroups/Query
 * @summary query the ModifierGroups collection for a single order
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {Array<String>} [args.shopIds] - a list of shop id's
 * @param {Array<String>} [args.modifierGroupIds] - a list of modifier group id's
 * @param {String} args.query - a query that match with any of modifier group fields
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} ModifierGroups
 */
export default async function ModifierGroups(_, args, context, info) {
    const {
        shopIds: opaqueShopIds,
        modifierGroupIds: opaqueModifierGroupIds,
        query: queryString,
        ...connectionArgs
    } = args;

    const shopIds = opaqueShopIds.map(decodeShopOpaqueId);
    const modifierGroupIds = opaqueModifierGroupIds.map(decodeModifierGroupOpaqueId);

    const query = await context.queries.modifierGroups(context, {
        shopIds,
        modifierGroupIds,
        query: queryString
    });

    return getPaginatedResponse(query, connectionArgs, {
        includeHasNextPage: wasFieldRequested("pageInfo.hasNextPage", info),
        includeHasPreviousPage: wasFieldRequested("pageInfo.hasPreviousPage", info),
        includeTotalCount: wasFieldRequested("totalCount", info)
    });
}