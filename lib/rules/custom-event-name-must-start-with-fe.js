/**
 * @fileoverview 前端publish事件必须以fe-开头
 * @author tangkai
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const description = '前端publish事件必须以fe-开头';
const category = 'IMS';

module.exports = {
    meta: {
        docs: {
            description,
            category,
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression: (node) => {
                const { callee: { object: { name: objectName }, property: { name: propertyName } }, arguments: [{ value } = {}] = [] } = node;
                const check = [
                    objectName === 'msgCenter',
                    propertyName === 'publish',
                    typeof value === 'string',
                    value.startsWith('fe-'),
                ]
                if (!check.every(Boolean)) {
                    context.report({
                        message: description,
                        node,
                    })
                }
            }
            // give me methods

        };
    }
};
