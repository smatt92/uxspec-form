import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { uxField, useFormUX } from "../src";
const emailUX = uxField({
    name: "email",
    required: true,
    validateOn: "blur",
    errorTone: "polite",
    reserveErrorSpace: true,
    successFeedback: "subtle",
});
export function Example() {
    var _a;
    const { register, formState: { errors, touchedFields }, } = useForm();
    const ux = useFormUX({
        config: emailUX,
        error: (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message,
        touched: touchedFields.email,
        valid: !errors.email,
    });
    return (_jsxs("div", { children: [_jsx("input", { ...register("email") }), _jsxs("div", { className: ux.helperClassName, children: [ux.showError && (_jsx("span", { className: ux.errorClassName, children: "Invalid email" })), ux.showSuccess && _jsx("span", { children: "Looks good" })] })] }));
}
