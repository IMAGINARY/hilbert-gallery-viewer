/* eslint-disable no-console */

enum LogLevel {
  OFF = 0,
  ERROR = 200,
  WARN = 300,
  INFO = 400,
  DEBUG = 500,
  TRACE = 600,
}

export default class Log {
  level: LogLevel;

  constructor(level: LogLevel = LogLevel.INFO) {
    this.level = level;
  }

  error(...args: unknown[]) {
    if (this.level >= LogLevel.ERROR) {
      console.error(...args);
    }
  }

  assert(assertion: boolean, ...args: unknown[]) {
    if (this.level >= LogLevel.ERROR) {
      console.assert(assertion, ...args);
    }
  }

  warn(...args: unknown[]) {
    if (this.level >= LogLevel.WARN) {
      console.warn(...args);
    }
  }

  info(...args: unknown[]) {
    if (this.level >= LogLevel.INFO) {
      console.info(...args);
    }
  }

  debug(...args: unknown[]) {
    if (this.level >= LogLevel.DEBUG) {
      console.debug(...args);
    }
  }

  trace(...args: unknown[]) {
    if (this.level >= LogLevel.TRACE) {
      console.trace(...args);
    }
  }
}

export { Log, LogLevel };
