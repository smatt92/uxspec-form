import { UXFieldInput, UXFieldState } from "./types"

export function resolveUXFieldState({
  config,
  hasError,
  touched,
  valid,
  formPhase = "interacted"
}: UXFieldInput): UXFieldState {

  const allowValidation =
    config.validateOn === "change" ||
    (config.validateOn === "blur" && touched) ||
    (config.validateOn === "submit" && formPhase === "submitted")

  const showError = hasError && allowValidation

  const showSuccess =
    valid &&
    !hasError &&
    config.successFeedback === "subtle" &&
    formPhase !== "idle"

  const errorClassName = showError
    ? config.errorTone === "assertive"
      ? "ux-error-assertive"
      : "ux-error-polite"
    : ""

  const helperClassName = [
    config.reserveErrorSpace ? "ux-helper-reserved" : "",
    showError ? "ux-helper-error" : "",
    showSuccess ? "ux-helper-success" : ""
  ].join(" ").trim()

  return {
    showError,
    showSuccess,
    errorClassName,
    helperClassName
  }
}
