module.exports.command = function axeRun(selector = 'html', options = {}) {
    this.executeAsync(function (selector, options, done) {

        (function (axe) {
            if (!axe) done({
                error: 'aXe not found. Make sure it has been injected'
            })
            var el = document.querySelector(selector)

            axe.run(el, options, function (err, results) {
                if (err) {
                    done({
                        error: err.toString()
                    })
                }
                done({
                    results: results
                })
            })
        })(window.axe)

    }, [selector, options], function (response) {
        const {
            error,
            results
        } = response.value

        const {
            passes = [], violations = []
        } = results

        for (let i = 0; i < passes.length; i++) {
            this.assert.ok(true, `aXe rule: ${passes[i].id} (${passes[i].nodes.length} elements checked)`);
        }

        for (let i = 0; i < violations.length; i++) {

            for (let n = 0; n < violations[i].nodes.length; n++) {

                let nodeName = violations[i].nodes[n].target.toString();
                if (nodeName.length > 100) {
                    nodeName = "..." + nodeName.slice(-100);
                }

                let assertionFailureMessage =
                    `aXe rule: ${violations[i].id} - ${violations[i].help}\r\n\tIn element: ${nodeName}`;
                this.verify.fail(assertionFailureMessage);
            }
        }
    })

    return this
}
