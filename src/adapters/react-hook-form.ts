import { FieldError } from "react-hook-form"
import { UXFieldConfig, FormPhase } from "../types"
import { uxField } from "../uxField"
import { useUXField } from "../useUXField"

interface ReactHookFormUXParams {
  config: UXFieldConfig
  error?: FieldError
  touched?: boolean
  isValid?: boolean
  isSubmitted?: boolean
}

export function useReactHookFormUX({
  config,
  error,
  touched = false,
  isValid = false,
  isSubmitted = false
}: ReactHookFormUXParams) {
  const normalizedConfig = uxField(config)

  const formPhase: FormPhase = isSubmitted
    ? "submitted"
    : touched
      ? "interacted"
      : "idle"

  return useUXField({
    config: normalizedConfig,
    hasError: Boolean(error),
    touched,
    valid: isValid,
    formPhase
  })
}
