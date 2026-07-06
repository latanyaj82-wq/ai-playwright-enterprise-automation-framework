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
        console.log('====================================');
        console.log('Enterprise Framework Initializing...');
        console.log('====================================');

        // Configuration Manager has already been initialized
        // by the constructor.

        console.log('Configuration Manager initialized successfully.');

        console.log('Framework initialization complete.');
    }
}