import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['iife'], // IIFE 형식으로 변경
  globalName: 'NudgeMoment', // 전역 변수 이름
  dts: true,
  splitting: false,
  clean: true,
  minify: true,
  outExtension: () => ({
    js: '.js',
  }),
});
