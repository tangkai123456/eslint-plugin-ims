/**
 * @fileoverview 前端publish事件必须以fe-开头
 * @author tangkai
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/custom-event-name-must-start-with-fe"),

    { RuleTester } = require("eslint");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const description = '前端publish事件必须以fe-开头';

var ruleTester = new RuleTester();
ruleTester.run("custom-event-name-must-start-with-fe", rule, {

    valid: [
        "msgCenter.publish('fe-xxx')"
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "msgCenter.publish('xxx')",
            errors: [{
                message: description,
            }]
        }
    ]
});
