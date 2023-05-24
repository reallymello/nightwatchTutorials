import { NightwatchClient, NightwatchExpectResult } from 'nightwatch';

export default class WaitForLoadScreen {
  async command(
    this: NightwatchClient,
    maxWaitInMs: number
  ): Promise<NightwatchExpectResult> {
    return this.api.expect
      .element('#loadScreenOverlay')
      .to.not.be.present.before(maxWaitInMs);
  }
}
