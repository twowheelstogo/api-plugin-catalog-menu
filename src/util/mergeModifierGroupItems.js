import Random from "@reactioncommerce/random";

/**
 * @name mergeModifierGroupItems
 * @summary get the incoming items and merge into the current items
 * @param {Object} context - App context
 * @param {Object[]} currentItems
 * @param {Object[]} incomingItems
 * @returns {Object} Object with the updated item list
 */
export default function mergeModifierGroupItems(context, currentItems, incomingItems) {
    const updatedItems = currentItems || [];

    for (var item of incomingItems) {
        const { productConfiguration, ...itemProps } = item;
        const exists = (currentItems || []).find((current) => current.variantId === productConfiguration.productVariantId);
        console.log("item already exists", exists);

        if (!exists) {
            const modifierItem = {
                _id: Random.id(),
                productId: productConfiguration.productId,
                variantId: productConfiguration.productVariantId,
                createdAt: new Date(),
                updatedAt: new Date(),
                ...itemProps
            };

            updatedItems.push(modifierItem);
        }
    }

    return updatedItems;
}