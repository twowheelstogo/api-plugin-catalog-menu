import SimpleSchema from "simpl-schema";
import Random from "@reactioncommerce/random";
import mergeModifierGroupItems from "../util/mergeModifierGroupItems.js";

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
    const { ModifierGroups } = collections;
    const { modifierGroup: { name, note, items: itemsInput, required } } = input;

    const items = itemsInput && mergeModifierGroupItems(context, null, itemsInput);

    console.log(items);
    
    const modifierGroupInput = {
        _id: Random.id(),
        name,
        note,
        createdAt: new Date(),
        updatedAt: new Date(),
        items,
        required
    };

    await ModifierGroups.insertOne(modifierGroupInput);

    return modifierGroupInput;
}
