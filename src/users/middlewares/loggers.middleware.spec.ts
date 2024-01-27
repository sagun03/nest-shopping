import { LoggersMiddleware } from './Loggers.middleware';

describe('LoggersMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggersMiddleware()).toBeDefined();
  });
});
