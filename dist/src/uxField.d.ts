import { UXFieldConfig, UXFieldState } from "./types";
export declare function uxField(config: UXFieldConfig): UXFieldConfig;
export declare function resolveUXState(config: UXFieldConfig, hasError: boolean, isTouched: boolean, isValid: boolean): UXFieldState;
