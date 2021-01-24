# Implementing a minimum accessibility test plan using Nightwatch, aXe, and nightwatch-axe-verbose

This suite contains a practical example of how to introduce an automated minimum accessibility test plan when beginning to refactor a website to include web content accessibility guideline features.

This is the source code from this [Nightwatch accessibility tutorial video](https://youtu.be/lsv_lwxu2tI). The full explanation is below and also corresponds to the article [Implementing a minimum accessibility test plan in Nightwatch.js](https://www.davidmello.com/implementing-a-minimum-accessibility-test-plan/)

## How to run

1. npm install
2. npm test
3. The tests inside the test folder will execute

The tests are split up to show 4 different styles of writing accessibility assertions
- Run all rules (a11y-v1.js)
- Run all rules and exclude some (a11y-v2.js)
- Run only specific axe rules (a11y-v3.js)
- Using run specific rules to create a more understandable test (accessibilityTest.js)

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

