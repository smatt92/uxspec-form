// src/resolveUXFieldState.ts

import {
  UXFieldConfig,
  UXFieldState,
  FormPhase
} from "./types"

interface ResolveInput {
  config: UXFieldConfig
  hasError: boolean
  touched: boolean
  valid: boolean
  formPhase?: FormPhase
}

export function resolveUXFieldState({
  config,
  hasError,
  touched,
  valid,
  formPhase = "idle"
}: ResolveInput): UXFieldState {
  /**
   * When is validation allowed to surface?
   * This is the core UX contract.
   */
  const allowValidation =
    config.validateOn === "change" ||
    (config.validateOn === "blur" && touched) ||
    (config.validateOn === "submit" && formPhase === "submitted")

  /**
   * Error visibility
   */
  const showError = Boolean(hasError && allowValidation)

  /**
   * Success visibility (subtle only, never before interaction)
   */
  const showSuccess =
    Boolean(
      valid &&
      !hasError &&
      config.successFeedback === "subtle" &&
      formPhase !== "idle"
    )

  /**
   * Error tone → class
   */
  const errorClassName = showError
    ? config.errorTone === "assertive"
      ? "ux-error-assertive"
      : "ux-error-polite"
    : ""

  /**
   * Helper container behavior
   */
  const helperClassName = [
    config.reserveErrorSpace ? "ux-helper-reserved" : "",
    showError ? "ux-helper-error" : "",
    showSuccess ? "ux-helper-success" : ""
  ]
    .filter(Boolean)
    .join(" ")

  return {
    showError,
    showSuccess,
    errorClassName,
    helperClassName
  }
}
