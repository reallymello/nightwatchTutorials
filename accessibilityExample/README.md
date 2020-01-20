This suite contains example tests that explore using the axe-core library to perform accessibility assertions in your NightwatchJS test suite.

## How this works

1. npm install
2. npm test
3. The tests inside the test folder will execute

The folder has examples of various WCAG inaccessible sites as well as one fully accessible one.

### Test output

Passes will be logged indicated what rule passed and how many elements the rule passed against

```
√ Passed [ok]: aXe rule: aria-allowed-attr (2 elements checked)
√ Passed [ok]: aXe rule: aria-allowed-role (9 elements checked)
√ Passed [ok]: aXe rule: aria-hidden-body (1 elements checked)
√ Passed [ok]: aXe rule: aria-hidden-focus (2 elements checked)
```

Failures will be logged per control per rule so you have a complete picture of everything that is failing WCAG guidelines. Downstream failures won't be hidden by the test exiting on the first failure.

```
× Failed [fail]: (aXe rule: button-name - Buttons must have discernible text
        In element: .departure-date > .ui-datepicker-trigger:nth-child(4))
× Failed [fail]: (aXe rule: color-contrast - Elements must have sufficient color contrast
        In element: a[href="mars2\.html\?a\=be_bold"] > h3)
```

## Rules the aXe uses

[https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

## Example of aXe result object

```
{
    "description": "Ensures ARIA attributes are allowed for an element's role",
    "help": "Elements must only use allowed ARIA attributes",
    "helpUrl": "https://dequeuniversity.com/rules/axe/2.6/aria-allowed-attr?application=axeAPI",
    "id": "aria-allowed-attr",
    "impact": null,
    "nodes": [{
        "all": [],
        "any": [{
            "data": null,
            "id": "aria-allowed-attr",
            "impact": "critical",
            "message": "ARIA attributes are used correctly for the defined role",
            "relatedNodes": []
        }],
        "html": "<input type=\"text\" value=\"\" class=\"city-input ac_input ui-autocomplete-input\" autocomplete=\"off\" id=\"from0\" name=\"from0\" tabindex=\"1\" role=\"textbox\" aria-autocomplete=\"list\" aria-haspopup=\"true\">",
        "impact": null,
        "none": [],
        "target": ["#from0"]
    }, {
        "all": [],
        "any": [{
            "data": null,
            "id": "aria-allowed-attr",
            "impact": "critical",
            "message": "ARIA attributes are used correctly for the defined role",
            "relatedNodes": []
        }],
        "html": "<input type=\"text\" value=\"\" class=\"city-input ac_input ui-autocomplete-input\" autocomplete=\"off\" id=\"to0\" name=\"to0\" tabindex=\"1\" role=\"textbox\" aria-autocomplete=\"list\" aria-haspopup=\"true\">",
        "impact": null,
        "none": [],
        "target": ["#to0"]
    }],
    "tags": ["cat.aria", "wcag2a", "wcag411", "wcag412"]
}
```
