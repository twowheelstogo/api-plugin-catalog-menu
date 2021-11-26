import { encodeModifierGroupOpaqueId } from "../../xforms/id.js";

export default {
    id: (node) => encodeModifierGroupOpaqueId(node._id),
    name: (node) => node.name,
    createdAt: (node) => node.createdAt,
    updatedAt: (node) => node.updatedAt,
    description: (node) => node.description,
    products: (node, __, ctx) => null
}