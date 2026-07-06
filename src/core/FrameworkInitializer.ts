/* Initialize shared framework services, Ensure services are created only once, Prepare the framework before test execution, Provide a single bootstrap entry point. */

import { ConfigManager } from '../config/configManager';

export class FrameworkInitializer {
    private configManager: ConfigManager;

    constructor() {
        this.configManager = new ConfigManager();
    }

    /**
     * Returns the framework Configuration Manager.
     */
    public getConfigManager(): ConfigManager {
        return this.configManager;
    }

    /**
     * Initializes all shared framework services.
     * Additional services will be added here as the framework grows.
     */
    public initialize(): void {

    console.log('========================================');
    console.log('Enterprise Framework Initializing...');
    console.log('========================================');

    // Get the loaded configuration
    const config = this.configManager.getConfiguration();

    console.log('Configuration Manager initialized successfully.');

    console.log('');
    console.log('Active Configuration');
    console.log('----------------------------------------');
    console.log(`Environment : ${config.environment}`);
    console.log(`Base URL    : ${config.baseUrl}`);
    console.log(`Browser     : ${config.browser}`);
    console.log(`Headless    : ${config.headless}`);
    console.log(`Retry Count : ${config.retryCount}`);
    console.log('');
    console.log('Timeouts');
    console.log('----------------------------------------');
    console.log(`Short  : ${config.timeouts.short} ms`);
    console.log(`Medium : ${config.timeouts.medium} ms`);
    console.log(`Long   : ${config.timeouts.long} ms`);
    console.log('');

    console.log('Framework initialization complete.');
}
    
}