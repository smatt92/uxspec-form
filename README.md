![npm](https://img.shields.io/npm/v/@smatt92/uxspec-form)
![npm downloads](https://img.shields.io/npm/dm/@smatt92/uxspec-form)
![license](https://img.shields.io/npm/l/@smatt92/uxspec-form)
![types](https://img.shields.io/npm/types/@smatt92/uxspec-form)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@smatt92/uxspec-form)

# @smatt92/uxspec-form

> **UX contracts for forms**  
> Validate *experience*, not just data.

Most form libraries focus on **what is valid**.  
This library focuses on **when and how feedback appears**.

`@smatt92/uxspec-form` lets you define **UX rules explicitly**—so error timing, success feedback, and layout behavior stop being guesswork scattered across components.

---

## Why this exists

Forms often fail users not because validation is wrong, but because **feedback is inconsistent**:

- Errors appear too early or too late
- Layout jumps when messages appear
- Success feedback is missing or noisy
- Every field behaves slightly differently

These are **UX decisions**, but they’re usually encoded implicitly in UI code.

This library makes those decisions **explicit, reusable, and predictable**.

---

## What this library is (and isn’t)

### What it is
- A **UX rules engine** for form fields
- Framework-agnostic logic with a React hook
- Designed to sit **on top of** existing form libraries
- Small, deterministic, and easy to reason about

### What it is not
- Not a form state manager
- Not a validation library
- Not a UI component library
- Not a replacement for React Hook Form, Formik, etc.

Think of it as a **UX schema**, not a data schema.

---

## Install

```bash
npm install @smatt92/uxspec-form

Basic usage
1. Define a UX contract
import { uxField } from "@smatt92/uxspec-form"

const emailUX = uxField({
  name: "email",
  validateOn: "blur",
  reserveErrorSpace: true,
  successFeedback: "subtle",
})


This describes how the field should behave, not how it validates.

2. Use it in a React form (example with React Hook Form)
import { useForm } from "react-hook-form"
import { useFormUX } from "@smatt92/uxspec-form"

function EmailField() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm<{ email: string }>()

  const ux = useFormUX({
    config: emailUX,
    error: errors.email?.message,
    touched: touchedFields.email,
    valid: !errors.email,
  })

  return (
    <div>
      <input {...register("email")} />

      <div className={ux.helperClassName}>
        {ux.showError && <span>Invalid email</span>}
        {ux.showSuccess && <span>Looks good</span>}
      </div>
    </div>
  )
}


The hook returns pure UI state:

when to show errors

when to show success

which helper classes to apply

No side effects. No magic.

API
uxField(config)

Defines a UX contract for a single field.

uxField({
  name: string
  required?: boolean
  validateOn?: "change" | "blur" | "submit"
  reserveErrorSpace?: boolean
  errorTone?: "polite" | "assertive"
  successFeedback?: "none" | "subtle"
})


All options represent UX decisions, not technical constraints.

useFormUX({ config, error, touched, valid })

Resolves a UX contract into render-ready state.

useFormUX({
  config: UXFieldConfig
  error?: string
  touched?: boolean
  valid?: boolean
})


Returns:

{
  showError: boolean
  showSuccess: boolean
  errorClassName: string
  helperClassName: string
}


You decide how to render.
The library decides when.

Design principles

Explicit over implicit
UX rules should be visible in code.

Predictable over clever
Same inputs always produce the same UI state.

Composable over opinionated UI
Works with any design system or form library.

Small surface area
Easy to learn, easy to maintain.

Status

Version: 0.1.0

Scope: intentionally minimal

Stability: API may evolve, core idea is stable

This is a foundational library, not a finished framework.

Roadmap ideas (not promises)

Form-level UX contracts

Presets for common patterns (login, checkout)

Dev-only warnings for UX anti-patterns

License

MIT