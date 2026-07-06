import { test, expect } from '@playwright/test';
import { FrameworkInitializer } from '../src/core/FrameworkInitializer';
import { Logger } from '../src/utils/logger';

test('Framework initializes successfully', async () => {

    const framework = new FrameworkInitializer();

    framework.initialize();

    const config = framework.getConfigManager().getConfiguration();

    console.log(config);

    expect(config.environment).toBe('dev');
});

test('Logger works correctly', () => {

    Logger.info('Information message');

    Logger.warn('Warning message');

    Logger.error('Error message');

    Logger.debug('Debug message');

});