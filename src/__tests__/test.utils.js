import { medianSlidingWindow } from '../utils';
import { spectrum } from '../../testData/spectrum';
import { runningMedianConst } from '../../testData/runningmed';

describe('test running median', () => {
  it('compare with R', () => {
    const actual = medianSlidingWindow(spectrum, 2 * 500 + 1);
    expect(actual).toHaveLength(5000);
    for (let i = 0; i < actual.length; i++) {
      expect(
        Math.abs(actual[i] - runningMedianConst[i]) / runningMedianConst[i],
      ).toBeLessThan(0.01);
    }
  });
});