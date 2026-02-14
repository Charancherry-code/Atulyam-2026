export const ENV = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  appName: 'Atulyam',
  appVersion: '0.2.0',
} as const;

export const ANALYTICS = {
  enabled: true,
  sampleRate: 1.0,
} as const;

export const CACHE = {
  defaultTTL: 3600, // 1 hour in seconds
  maxItems: 100,
} as const;
