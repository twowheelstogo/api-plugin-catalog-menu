import { decodeModifierGroupOpaqueId } from "../../xforms/id.js";

/**
 * @name Query/ModifierGroup
 * @method
 * @memberof ModifierGroup/Query
 * @summary query the ModifierGroups collection for a single order
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.id - ModifierGroup id
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} ModifierGroup
 */
export default async function ModifierGroup(_, args, context) {
    const {
        id: opaqueId
    } = args;

    const id = decodeModifierGroupOpaqueId(opaqueId);

    return context.queries.modifierGroup(context, {
        id
    });
}