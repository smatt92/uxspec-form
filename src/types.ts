export type ValidateOn = "change" | "blur" | "submit"
export type ErrorTone = "polite" | "assertive"
export type SuccessFeedback = "none" | "subtle"
export type FormPhase = "idle" | "interacted" | "submitted"

export interface UXFieldConfig {
  name: string
  required?: boolean
  validateOn?: ValidateOn
  reserveErrorSpace?: boolean
  errorTone?: ErrorTone
  successFeedback?: SuccessFeedback
}

export interface UXFieldInput {
  config: UXFieldConfig
  hasError: boolean
  touched: boolean
  valid: boolean
  formPhase?: FormPhase
}

export interface UXFieldState {
  showError: boolean
  showSuccess: boolean
  errorClassName: string
  helperClassName: string
}
