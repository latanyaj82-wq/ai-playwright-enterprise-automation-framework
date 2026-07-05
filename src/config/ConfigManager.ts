/* Load framework configuration, Validate required configuration, Provide framework-wide access
Support, multiple environments, Centralize configuration management */

import { FrameworkConfig } from './FrameworkConfig';

export class ConfigManager {
    private configuration: FrameworkConfig;

    constructor() {
        this.configuration = this.loadConfiguration();
    }

    /**
     * Loads the framework configuration.
     * Version 1 uses hard-coded values.
     * Future versions will load from:
     *  - .env files
     *  - JSON configuration
     *  - Azure Key Vault
     *  - GitHub Secrets
     */
    private loadConfiguration(): FrameworkConfig {
        return {
            environment: 'dev',

            baseUrl: 'https://opensource-demo.orangehrmlive.com',

            browser: 'chromium',

            headless: false,

            retryCount: 1,

            timeouts: {
                short: 3000,
                medium: 10000,
                long: 30000
            }
        };
    }

    /**
     * Returns the loaded framework configuration.
     */
    public getConfiguration(): FrameworkConfig {
        return this.configuration;
    }
}