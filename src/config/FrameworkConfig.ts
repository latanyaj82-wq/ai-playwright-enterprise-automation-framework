

export interface FrameworkConfig {
    environment: string;

    baseUrl: string;

    browser: string;

    headless: boolean;

    retryCount: number;

    timeouts: {
        short: number;
        medium: number;
        long: number;
    };
}