
import { UXFieldInput, UXFieldState } from "./types"
import { resolveUXFieldState } from "./resolveUXFieldState"

export function useUXField(input: UXFieldInput): UXFieldState {
  return resolveUXFieldState(input)
}
