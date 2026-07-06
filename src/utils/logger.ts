
export class Logger {

    private static timestamp(): string {
        return new Date().toISOString();
    }

    public static info(message: string): void {
        console.log(`[${this.timestamp()}] [INFO] ${message}`);
    }

    public static warn(message: string): void {
        console.warn(`[${this.timestamp()}] [WARN] ${message}`);
    }

    public static error(message: string): void {
        console.error(`[${this.timestamp()}] [ERROR] ${message}`);
    }

    public static debug(message: string): void {
        console.log(`[${this.timestamp()}] [DEBUG] ${message}`);
    }

}