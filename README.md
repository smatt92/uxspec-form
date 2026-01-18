# uxspec-form

**UX contracts for forms.**  
Control *when* feedback appears and *how* it feels — without changing validation rules.

Forms don’t fail because of validation.  
They fail because of **bad feedback timing**.

`uxspec-form` lets you define **UX behavior explicitly**, instead of relying on implicit form-library defaults.

---

## What problem does this solve?

Most form libraries answer:

> “Is this value valid?”

UXSpec answers:

> “When should the user see feedback, and how should it feel?”

Examples of real UX problems:
- Errors appearing while the user is still typing
- Errors only appearing after submit, with no warning
- Layout jumping when errors show up
- Success feedback appearing too early (or never)

UXSpec makes these decisions **intentional** and **predictable**.

---

## Core idea (in human terms)

Each field declares:
- **When** it is allowed to validate
- **How strong** the error feedback feels
- **Whether** success feedback should appear
- **Whether** space should be reserved for messages

The form only provides **facts** (error, touched, submitted).  
The field decides the UX behavior.

---

## Installation

```bash
npm install @smatt92/uxspec-form
Core concepts
1. UX Field configuration
This is framework-agnostic.

ts
Copy code
import { uxField } from "@smatt92/uxspec-form"

const emailUX = uxField({
  name: "email",

  // When validation is allowed
  validateOn: "blur",        // "change" | "blur" | "submit"

  // How error feedback feels
  errorTone: "polite",       // "polite" | "assertive"

  // Whether to show success feedback
  successFeedback: "subtle", // "none" | "subtle"

  // Prevent layout shift
  reserveErrorSpace: true
})
This does not depend on React, React Hook Form, or any UI library.

2. UX resolution (the engine)
Given a field config + a few facts, UXSpec deterministically decides what the UI should do.

ts
Copy code
import { resolveUXFieldState } from "@smatt92/uxspec-form"
The engine needs only four facts:

hasError – is the field invalid?

touched – has the user interacted?

valid – is the value valid?

formPhase – "interacted" or "submitted"

It returns:

ts
Copy code
{
  showError: boolean
  showSuccess: boolean
  errorClassName: string
  helperClassName: string
}
UXSpec never renders UI — it only decides behavior.

React Hook Form example
UXSpec ships an explicit adapter for React Hook Form.

ts
Copy code
import { useForm } from "react-hook-form"
import { uxField } from "@smatt92/uxspec-form"
import { useReactHookFormUX } from "@smatt92/uxspec-form/adapters/react-hook-form"
tsx
Copy code
const form = useForm()

const emailUX = uxField({
  name: "email",
  validateOn: "blur",
  successFeedback: "subtle",
  reserveErrorSpace: true
})

const ux = useReactHookFormUX({
  form,
  field: emailUX,
  formPhase: form.formState.isSubmitted ? "submitted" : "interacted"
})
Usage in JSX:

tsx
Copy code
<input {...form.register("email", { required: true })} />

<div className={ux.helperClassName}>
  {ux.showError && "Email is required"}
  {ux.showSuccess && "Looks good"}
</div>
You control what is rendered.
UXSpec controls when.