import dotenv from 'dotenv';

export class EnvironmentLoader {

    public static load(): void {

        const environment =
            process.env.TEST_ENV || 'dev';

        const environmentFile = `.env.${environment}`;

console.log('=================================');

console.log(`Loading ${environment.toUpperCase()} Environment`);

console.log(`Configuration File : ${environmentFile}`);

console.log('=================================');
        dotenv.config({
            path: environmentFile
        });

    }

}