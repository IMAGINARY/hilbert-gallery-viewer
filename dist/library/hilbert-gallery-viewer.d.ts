enum LogLevel {
    OFF = 0,
    ERROR = 200,
    WARN = 300,
    INFO = 400,
    DEBUG = 500,
    TRACE = 600
}
type State = {
    log: Log;
    shadowRoot: ShadowRoot;
    container: HTMLDivElement;
};
type ActionRegistry = Map<string, Action<unknown, unknown>>;

//# sourceMappingURL=hilbert-gallery-viewer.d.ts.map
