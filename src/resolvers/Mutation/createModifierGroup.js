import { decodeModifierGroupItemsOpaqueIds } from "../../xforms/id.js";

/**
 * @name Mutation/createModifierGroup
 * @memberof ModifierGroup/GraphQL
 * @summary resolver for the createModifierGroup GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} args.input.createModifierGroup - The input for the modifier group to create.
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} CreateModifierGroupPayload
 */
export default async function createModifierGroup(parentResult, { input }, context) {
    const {
        modifierGroup: {
            items: itemsInput,
            required = false,
            ...modifierInput
        }, clientMutationId = null } = input;
    const items = itemsInput && decodeModifierGroupItemsOpaqueIds(itemsInput);

    const modifierGroupInput = {
        ...modifierInput,
        required,
        items
    };

    const modifierGroup = await context.mutations.createModifierGroup(context, {
        modifierGroup: modifierGroupInput
    });

    return { modifierGroup, clientMutationId };
}