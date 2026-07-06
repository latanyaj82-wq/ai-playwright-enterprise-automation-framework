import { test, expect } from '@playwright/test';
import { Helpers } from '../src/utils/helpers';

test('Helpers utility methods', async () => {

    expect(Helpers.randomNumber(1, 10)).toBeGreaterThanOrEqual(1);

    expect(Helpers.isNullOrEmpty('')).toBeTruthy();

    expect(Helpers.isNullOrEmpty('Playwright')).toBeFalsy();

    console.log(Helpers.timestamp());

    console.log(Helpers.formatDate(new Date()));

    await Helpers.sleep(500);

});