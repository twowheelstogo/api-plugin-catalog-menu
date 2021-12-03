
/**
 * @name modifierGroups
 * @summary get a array list of modifier groups
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - input for the modifier groups query
 * @returns {Promise<Object>} ModifierGroups object promise
 */
export default async function modifierGroups(context, input) {
    const { collections } = context;
    const { ModifierGroups } = collections;
    const productFilters = input;
  
    // Check the permissions for all shops requested
    await Promise.all(productFilters.shopIds.map(async (shopId) => {
      await context.validatePermissions("reaction:legacy:products", "read", { shopId });
    }));
  
    // Create the mongo selector from the filters
    // const selector = applyProductFilters(context, productFilters);
    const selector = null;

    // Get the first N (limit) top-level products that match the query
    return ModifierGroups.find(selector);
}