declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EsButton: (typeof import('../packages/components/index'))['EsButton']
    EsAlert: (typeof import('../packages/components/index'))['EsAlert']
    EsCard: (typeof import('../packages/components/index'))['EsCard']
    EsCheckbox: (typeof import('../packages/components/index'))['EsCheckbox']
    EsDialog: (typeof import('../packages/components/index'))['EsDialog']
    EsDrawer: (typeof import('../packages/components/index'))['EsDrawer']
    EsInput: (typeof import('../packages/components/index'))['EsInput']
    EsRadio: (typeof import('../packages/components/index'))['EsRadio']
    EsScrollBar: (typeof import('../packages/components/index'))['EsScrollBar']
    EsSelect: (typeof import('../packages/components/index'))['EsSelect']
    EsSteps: (typeof import('../packages/components/index'))['EsSteps']
    EsSwitch: (typeof import('../packages/components/index'))['EsSwitch']
    EsTag: (typeof import('../packages/components/index'))['EsTag']
  }

  export interface componentCustomProperties {
    $message: (typeof import('../packages/components/index'))['EsMessage']
  }
}

export {}
