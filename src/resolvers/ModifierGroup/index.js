import { encodeModifierGroupOpaqueId } from "../../xforms/id.js";
import items from "./items.js";

export default {
    _id: (node) => encodeModifierGroupOpaqueId(node._id),
    name: (node) => node.name,
    createdAt: (node) => node.createdAt,
    updatedAt: (node) => node.updatedAt,
    note: (node) => node.note,
    items: (node, __, ctx) => items(ctx, node.items)
}
