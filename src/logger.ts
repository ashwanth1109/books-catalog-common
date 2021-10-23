/* eslint-disable no-console */
enum LoggerLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

export default class Logger {
  // By default, logger shows debug messages as well
  public static level = LoggerLevel.DEBUG;

  public static error(...messages: Array<string | undefined>): void {
    console.error("\x1b[31m%s", ...messages);
    console.error("\x1b[0m");
  }

  public static info(...messages: Array<string | undefined>): void {
    console.log(...messages);
  }

  public static debug(...messages: Array<string | undefined>): void {
    if (this.level === LoggerLevel.DEBUG) {
      console.log(...messages);
    }
  }

  public static warn(...messages: Array<string | undefined>): void {
    console.warn("\x1b[33m", ...messages);
    console.warn("\x1b[0m");
  }
}
