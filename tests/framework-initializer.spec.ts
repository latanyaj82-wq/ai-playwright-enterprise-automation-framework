import { test, expect } from '@playwright/test';
import { FrameworkInitializer } from '../src/core/FrameworkInitializer';

test('Framework initializes successfully', async () => {

    const framework = new FrameworkInitializer();

    framework.initialize();

    const config = framework.getConfigManager().getConfiguration();

    console.log(config);

    expect(config.environment).toBe('dev');
});