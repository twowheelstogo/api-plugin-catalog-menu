import { encodeModifierGroupOpaqueId } from "../../xforms/id.js";

export default {
    id: (node) => encodeModifierGroupOpaqueId(node._id),
    name: (node) => node.name,
    createdAt: (node) => node.createdAt,
    updatedAt: (node) => node.updatedAt,
    note: (node) => node.note,
    items: (node, __, ctx) => null
}
