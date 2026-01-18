import { FieldError, UseFormStateReturn } from "react-hook-form"
import { uxField } from "../uxField"
import { useUXField } from "../useUXField"
import { UXFieldConfig, FormPhase } from "../types"

interface RHFAdapterParams {
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
}: RHFAdapterParams) {

  const normalized = uxField(config)

  const formPhase: FormPhase =
    isSubmitted ? "submitted" : touched ? "interacted" : "idle"

  return useUXField({
    config: normalized,
    hasError: Boolean(error),
    touched,
    valid: isValid,
    formPhase
  })
}
