import { encodeModifierGroupItemOpaqueId } from "../../xforms/id.js";

export default function items(ctx, modifierItems) {

    if(!modifierItems) return null;

    return modifierItems.map((item) => {
        const { productId, variantId, _id, ...itemProps } = item;
        console.log(productId, variantId);

        return {
            _id: encodeModifierGroupItemOpaqueId(_id),
            productConfiguration: {
                productId,
                productVariantId: variantId
            },
            ...itemProps
        }
    });
}