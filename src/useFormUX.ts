import { UXFieldConfig } from "./types"
import { resolveUXState } from "./uxField"

interface Params {
  config: UXFieldConfig
  error?: string
  touched?: boolean
  valid?: boolean
}

export function useFormUX({
  config,
  error,
  touched = false,
  valid = false,
}: Params) {
  return resolveUXState(
    config,
    Boolean(error),
    touched,
    valid
  )
}
