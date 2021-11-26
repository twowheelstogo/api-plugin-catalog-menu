import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name modifierGroup
 * @summary gets a single modifier group
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - input for modifier group query
 * @param {String} input.id - id for a modifier group
 * @returns {Promise<Object>} An object with `modifierGroup`
 */
export default async function modifierGroup(context, input) {
    const { collections } = context;
    const { ModifierGroups } = collections;
    const { id } = input;

    if (!id) throw new ReactionError("missing-param", "id is a required param");

    return ModifierGroups.findOne({ _id: id });
}
