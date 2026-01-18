import { UXFieldConfig } from "./types"

export function uxField(config: UXFieldConfig): UXFieldConfig {
  return {
    validateOn: "blur",
    errorTone: "polite",
    successFeedback: "none",
    reserveErrorSpace: false,
    ...config,
  }
}
