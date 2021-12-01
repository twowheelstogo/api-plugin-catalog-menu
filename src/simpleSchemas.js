import SimpleSchema from "simpl-schema";

/**
 * @name ModifierGroupItem
 * @memberof Schemas
 * @type {SimpleSchema}
 * @property {String} _id required
 * @property {Object} productConfiguration optional
 * @property {Object} pricing optional
 * @property {String} title required
 * @property {String} pageTitle optional
 * @property {String} description optional
 * @property {String[]} modifierGroupIds optional
 */
export const ModifierGroupItem = new SimpleSchema({
    "_id": String,
    "productConfiguration": {
        type: Object,
        blackbox: true,
        optional: true
    },
    "pricing": {
        type: Object,
        blackbox: true,
        optional: true
    },
    "title": String,
    "pageTitle": {
        type: String,
        optional: true
    },
    "description": {
        type: String,
        optional: true
    },
    "modifierGroupIds": {
        type: Array,
        optional: true
    },
    "modifierGroupIds.$": String
})

/**
 * @name ModifierGroup
 * @memberof Schemas
 * @type {SimpleSchema}
 * @property {String} _id required
 * @property {String} name required
 * @property {String} createdAt optional
 * @property {String} updatedAt required
 * @property {String} note optional
 * @property {ModifierGroupItem[]} items optional
 */
export const ModifierGroup = new SimpleSchema({
    "_id": String,
    "name": String,
    "createdAt": {
        type: String,
        optional: true
    },
    "updatedAt": String,
    "note": {
        type: String,
        optional: true
    },
    "items": {
        type: Array,
        optional: true
    },
    "items.$": ModifierGroupItem
});