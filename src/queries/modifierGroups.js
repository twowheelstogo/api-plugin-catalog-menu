import applyModifierGroupFilters from "../util/applyModifierGroupFilters.js";

/**
 * @name modifierGroups
 * @summary get a array list of modifier groups
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - input for the modifier groups query
 * @param {Array<String>} input.shopIds - A list of shop ID's 
 * @param {Array<String>} input.modifierGroupIds - A list of modifier group ID's
 * @param {String} input.query - A query that match with any of modifier group fields 
 * @returns {Promise<Object>} ModifierGroups object promise
 */
export default async function modifierGroups(context, input) {
    const { collections } = context;
    const { ModifierGroups } = collections;
    const modifierGroupFilters = input;
  
    // Create the mongo selector from the filters
    const selector = applyModifierGroupFilters(context, modifierGroupFilters);

    // Get the first N (limit) top-level products that match the query
    return ModifierGroups.find(selector);
}