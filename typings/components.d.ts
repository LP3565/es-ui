declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EsButton: (typeof import('../packages/components/index'))['EsButton']
  }
}

export {}
