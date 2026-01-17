import { UXFieldConfig } from "./types";
interface Params {
    config: UXFieldConfig;
    error?: string;
    touched?: boolean;
    valid?: boolean;
}
export declare function useFormUX({ config, error, touched, valid, }: Params): import("./types").UXFieldState;
export {};
