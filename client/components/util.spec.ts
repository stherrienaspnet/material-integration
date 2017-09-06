import { safeCb } from './util';

describe('Util', () => {
    it('Has a safeCb function', () => {
        let notAFunction = undefined;

        expect(safeCb(notAFunction)).to.not.throw(Error);
    });
});
