import { UXFieldInput, UXFieldState } from "./types"

export function resolveUXFieldState({
  config,
  hasError,
  touched,
  valid,
  formPhase = "interacted",
}: UXFieldInput): UXFieldState {

  const validateOn = config.validateOn ?? "blur"

  const allowValidation =
    validateOn === "change" ||
    (validateOn === "blur" && touched) ||
    (validateOn === "submit" && formPhase === "submitted")

  const showError = hasError && allowValidation

  const showSuccess =
    valid &&
    !hasError &&
    touched &&
    config.successFeedback === "subtle"

  const errorClassName =
    showError
      ? config.errorTone === "assertive"
        ? "ux-error-assertive"
        : "ux-error-polite"
      : ""

  const helperClassName = [
    config.reserveErrorSpace ? "ux-helper-reserved" : "",
    showError ? "ux-helper-error" : "",
    showSuccess ? "ux-helper-success" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return {
    showError,
    showSuccess,
    errorClassName,
    helperClassName,
  }
}
