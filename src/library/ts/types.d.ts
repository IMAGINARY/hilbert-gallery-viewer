declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'bundle-text:*.scss' {
  const css: string;
  export default css;
}

declare module '*.scss' {
  const css: string;
  export default css;
}
