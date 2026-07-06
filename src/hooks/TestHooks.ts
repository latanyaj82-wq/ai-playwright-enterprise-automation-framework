import { test } from '../fixtures/frameworkFixture';
import { Logger } from '../utils/logger';

test.beforeEach(async () => {
    Logger.info('Starting test...');
});

test.afterEach(async () => {
    Logger.info('Test completed.');
});