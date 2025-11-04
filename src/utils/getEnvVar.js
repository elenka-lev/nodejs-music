import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultValue) {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}

export const DEEZER_API_URL = getEnvVar(
  'DEEZER_API_URL',
  'https://api.deezer.com',
);