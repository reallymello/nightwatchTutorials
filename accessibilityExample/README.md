This are contains example tests that explore using the axe-core library to perform accessibility assertions in your NightwatchJS test suite.

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