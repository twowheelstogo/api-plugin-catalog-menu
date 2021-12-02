import ReactionError from "@reactioncommerce/reaction-error";
import mergeModifierGroupItems from "../util/mergeModifierGroupItems.js";

/**
 * @method addModifierGroupItems
 * @summary Adds a list of products into a modifier group
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - mutation input
 * 
 */
export default async function addModifierGroupItems(context, input) {
    const { collections } = context;
    const { ModifierGroups } = collections;
    const { items: itemsInput, modifierGroupId } = input;

    //gets the modifier group to update
    const modifierGroup = await ModifierGroups.findOne({ _id: modifierGroupId });

    if (!modifierGroup) throw new ReactionError("not-found", `The modifier group with id ${modifierGroupId} does not exists`);

    //merge the incoming items with the existent items
    const updatedItems = mergeModifierGroupItems(context, modifierGroup.items, itemsInput);

    const modifierGroupInput = {
        ...modifierGroup,
        updatedAt: new Date(),
        items: updatedItems
    };

    const selector = {
        $set: modifierGroupInput
    };

    //save changes into the database
    await ModifierGroups.findOneAndUpdate({
        _id: modifierGroupId
    }, selector, { upsert: true });

    return modifierGroupInput;
}