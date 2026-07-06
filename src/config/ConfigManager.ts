/* Load framework configuration, Validate required configuration, Provide framework-wide access
Support, multiple environments, Centralize configuration management */

import { FrameworkConfig } from './FrameworkConfig';
import { EnvironmentLoader } from './EnvironmentLoader';
import { BrowserConstants } from '../constants/BrowserConstants';
import { EnvironmentConstants } from '../constants/EnvirnomentConstants';
import { TimeoutConstants } from '../constants/TimeoutConstants';
import { FrameworkConstants } from '../constants/FrameworkConstants';


export class ConfigManager {
    private configuration: FrameworkConfig;

    constructor() {
        console.log("ConfigManager constructor executed");
        EnvironmentLoader.load();
        this.configuration = this.loadConfiguration();
        this.validateConfiguration();

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

        environment:
            process.env.ENVIRONMENT ||
            EnvironmentConstants.DEV,

        baseUrl:
            process.env.BASE_URL ||
            "https://opensource-demo.orangehrmlive.com",

        browser:
            (process.env.BROWSER as
                "chromium" | "firefox" | "webkit") ||
            BrowserConstants.CHROMIUM,

        headless:
            process.env.HEADLESS === "true",

        retryCount:
            Number(process.env.RETRY_COUNT) ||
            FrameworkConstants.DEFAULT_RETRY_COUNT,

        timeouts: {

            short:
                Number(process.env.SHORT_TIMEOUT) ||
                TimeoutConstants.SHORT,

            medium:
                Number(process.env.MEDIUM_TIMEOUT) ||
                TimeoutConstants.MEDIUM,

            long:
                Number(process.env.LONG_TIMEOUT) ||
                TimeoutConstants.LONG
        }
    };
}

    /**
     * Returns the loaded framework configuration.
     */
    public getConfiguration(): FrameworkConfig {
        return this.configuration;
    }

    /**
 * Validates the framework configuration during startup.
 * Throws an error if any required configuration is invalid.
 */
private validateConfiguration(): void {

    // Validate Environment
    if (!this.configuration.environment) {
        throw new Error("Configuration Error: Environment is required.");
    }

    // Validate Base URL
    if (!this.configuration.baseUrl) {
        throw new Error("Configuration Error: Base URL is required.");
    }

    if (!this.configuration.baseUrl.startsWith("http")) {
        throw new Error(
            "Configuration Error: Base URL must begin with 'http' or 'https'."
        );
    }

    // Validate Browser
    const supportedBrowsers = [
        "chromium",
        "firefox",
        "webkit"
    ];

    if (!supportedBrowsers.includes(this.configuration.browser)) {
        throw new Error(
            `Configuration Error: Unsupported browser '${this.configuration.browser}'.`
        );
    }

    // Validate Retry Count
    if (this.configuration.retryCount < 0) {
        throw new Error(
            "Configuration Error: Retry count cannot be negative."
        );
    }

    // Validate Timeouts
    const timeouts = this.configuration.timeouts;

    if (timeouts.short <= 0) {
        throw new Error(
            "Configuration Error: Short timeout must be greater than zero."
        );
    }

    if (timeouts.medium <= timeouts.short) {
        throw new Error(
            "Configuration Error: Medium timeout must be greater than short timeout."
        );
    }

    if (timeouts.long <= timeouts.medium) {
        throw new Error(
            "Configuration Error: Long timeout must be greater than medium timeout."
        );
    }
}
}
