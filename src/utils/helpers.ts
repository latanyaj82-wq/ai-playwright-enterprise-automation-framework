
export class Helpers {

    /**
     * Pause execution for a specified number of milliseconds.
     */
    public static async sleep(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    /**
     * Generate a random integer.
     */
    public static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate a timestamp string.
     */
    public static timestamp(): string {
        return new Date().toISOString();
    }

    /**
     * Format a date.
     */
    public static formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    /**
     * Determine whether a string is null or empty.
     */
    public static isNullOrEmpty(value: string | undefined | null): boolean {
        return value === undefined || value === null || value.trim() === '';
    }

}