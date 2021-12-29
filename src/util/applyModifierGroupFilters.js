import SimpleSchema from "simpl-schema";

const filters = new SimpleSchema({
    "modifierGroupIds": {
        type: Array,
        optional
    },
    "modifierGroupIds.$": String,
    "shopIds": {
        type: Array,
        optional
    },
    "shopIds.$": String,
    "query": {
        type: String,
        optional
    }
})

/**
 * @name applyModifierGroupFilters
 * @summary Builds a selector for ModiferGroups collection, given a set of filters
 * @private
 * @param {Object} context - an object containing the per-request state
 * @param {Object} modifierGroupFilters - See filters schema above
 * @returns {Object} Selector
 */
export default function applyModifierGroupFilters(context, modifierGroupFilters) {
    //if there are filter/params that don't match the schema
    filters.validate(modifierGroupFilters);

    //Init default selector
    let selector = {

    };

    if (modifierGroupFilters) {

        if (modifierGroupFilters.modifierGroupIds) {
            selector = {
                ...selector,
                _id: {
                    $in: modifierGroupFilters.modifierGroupIds
                }
            }
        }

        if (modifierGroupFilters.shopIds) {
            selector = {
                ...selector,
                _id: {
                    $in: modifierGroupFilters.shopIds
                }
            }
        }

        if (modifierGroupFilters.query) {
            const cond = {
                $regex: modifierGroupFilters.query,
                $options: "i"
            };
            selector = {
                ...selector,
                $or: [{
                    name: cond
                }, {
                    note: cond
                }]
            };
        }
    }

    return selector;
}