/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: 'npm',
  testRunner: 'vitest',
  plugins: ['@stryker-mutator/vitest-runner'],
  vitest: {
    configFile: 'vite.config.ts',
    related: true,
  },
  // Focus on units exercised by the Vitest suite (components, App shell, feature flags).
  // Entry mains and the GSAP-heavy Spyfall intro are excluded: mains are bootstraps, and
  // Spyfall timelines are mocked in tests so mutants there mostly inflate noise/runtime.
  mutate: [
    'src/App.tsx',
    'src/components/**/*.{ts,tsx}',
    'src/config/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  ignoreStatic: true,
  reporters: ['clear-text', 'progress', 'html', 'json'],
  htmlReporter: {
    fileName: 'reports/mutation/mutation.html',
  },
  jsonReporter: {
    fileName: 'reports/mutation/mutation.json',
  },
  thresholds: {
    high: 80,
    low: 60,
    break: null,
  },
  tempDirName: '.stryker-tmp',
  cleanTempDir: 'always',
};
