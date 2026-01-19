import { describe, it, expect } from "vitest"
import { resolveUXFieldState } from "./resolveUXFieldState"
import { UXFieldConfig } from "./types"

const baseConfig: UXFieldConfig = {
    name: "email",
    validateOn: "blur",
    errorTone: "polite",
    successFeedback: "subtle",
    reserveErrorSpace: true
}

describe("resolveUXFieldState", () => {
    it("does not show error before interaction on blur validation", () => {
        const state = resolveUXFieldState({
            config: baseConfig,
            hasError: true,
            touched: false,
            valid: false,
            formPhase: "interacted"
        })

        expect(state.showError).toBe(false)
    })

    it("shows error after blur when touched", () => {
        const state = resolveUXFieldState({
            config: baseConfig,
            hasError: true,
            touched: true,
            valid: false,
            formPhase: "interacted"
        })

        expect(state.showError).toBe(true)
    })

    it("shows error on submit when validateOn is submit", () => {
        const state = resolveUXFieldState({
            config: { ...baseConfig, validateOn: "submit" },
            hasError: true,
            touched: false,
            valid: false,
            formPhase: "submitted"
        })

        expect(state.showError).toBe(true)
    })

    it("does not show success before interaction", () => {
        const state = resolveUXFieldState({
            config: baseConfig,
            hasError: false,
            touched: false,
            valid: true,
            formPhase: "idle"
        })

        expect(state.showSuccess).toBe(false)
    })

    it("shows subtle success after interaction when valid", () => {
        const state = resolveUXFieldState({
            config: baseConfig,
            hasError: false,
            touched: true,
            valid: true,
            formPhase: "interacted"
        })

        expect(state.showSuccess).toBe(true)
    })
})
