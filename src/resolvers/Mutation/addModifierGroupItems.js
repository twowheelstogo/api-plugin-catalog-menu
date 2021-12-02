import { decodeModifierGroupItemsOpaqueIds, decodeModifierGroupOpaqueId } from "../../xforms/id.js";

/**
 * @name Mutation/addModifierGroupItems
 * @memberof ModifierGroup/GraphQL
 * @summary resolver for the addModifierGroupItems GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} args.input.modifierGroupId - The given modifier group id.
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {String} args.input.items - the given array list of items to set into the desired modifier group
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} AddModifierGroupItemsPayload
 */
export default async function addModifierGroupItems(parentResult, { input }, context) {
    const { modifierGroupId: opaqueModifierGroupId, clientMutationId = null, items: itemsInput } = input;

    const modifierGroupId = decodeModifierGroupOpaqueId(opaqueModifierGroupId);
    const items = decodeModifierGroupItemsOpaqueIds(itemsInput);

    const modifierGroup = await context.mutations.addModifierGroupItems(context, {
        modifierGroupId,
        items
    });

    return { modifierGroup, clientMutationId };
}