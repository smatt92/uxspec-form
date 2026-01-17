export function uxField(config) {
    return {
        required: false,
        validateOn: "blur",
        reserveErrorSpace: true,
        errorTone: "polite",
        successFeedback: "none",
        ...config,
    };
}
export function resolveUXState(config, hasError, isTouched, isValid) {
    const showError = hasError &&
        (config.validateOn === "change" ||
            (config.validateOn === "blur" && isTouched));
    const showSuccess = !hasError && isValid && config.successFeedback === "subtle";
    return {
        showError,
        showSuccess,
        errorClassName: config.errorTone === "assertive"
            ? "ux-error-assertive"
            : "ux-error-polite",
        helperClassName: config.reserveErrorSpace
            ? "ux-helper-reserved"
            : "",
    };
}
