import 'dotenv/config';
export const config = (): EnvironmentVariables => ({
  DB_PORT: parseInt(process.env.DB_PORT) || 3306,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_NAME: process.env.DB_NAME || 'eeau',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_USERNAME: process.env.DB_USERNAME || 'root',
  SWAGGER_PASSWORD: process.env.SWAGGER_PASSWORD || 'test',
  PORT: parseInt(process.env.PORT) || 8000,
});

export interface EnvironmentVariables {
  DB_PORT: number;
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  SWAGGER_PASSWORD: string;
  PORT: number;
}
