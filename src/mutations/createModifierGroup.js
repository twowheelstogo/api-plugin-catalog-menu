import SimpleSchema from "simpl-schema";
import Random from "@reactioncommerce/random";

/**
 * @method createModifierGroup
 * @summary Create a new modifier group for a shop
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - mutation input
 * @param {String} input.shopId - shop id for the draft order
 * @param {String} input.draftOrder.cartId id for the cart
 * @param {String} input.draftOrder.cartToken token for the cart
 * @param {String} input.draftOrder.accountId account id for the cart
 * @returns {Promise<Object>} An object with `draftOrder`
 */
export default async function createModifierGroup(context, input) {
    const { collections } = context;
    const { ModifierGroup } = collections;
    const { modifierGroupInput: { name, note } } = input;

    const modifierGroupInput = {
        _id: Random.id(),
        name,
        note,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    await ModifierGroup.insertOne(modifierGroupInput);

    return modifierGroupInput;
}
