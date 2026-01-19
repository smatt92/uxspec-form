[![npm version](https://img.shields.io/npm/v/@smatt92/uxspec-form.svg)](https://www.npmjs.com/package/@smatt92/uxspec-form)

# uxspec-form

**UX contracts for predictable form feedback**

> Forms don’t fail validation.  
> They fail UX.

`uxspec-form` lets you **control when feedback appears and how it feels** — without changing validation rules or form libraries.

---

## Why this exists

Most form libraries answer:

> “Is this field valid?”

Users experience a different problem:

> “Why is this error showing *right now*?”

`uxspec-form` separates **validation** from **UX behavior**.

---

## What this library does

✔ Decide **when** errors appear (`change | blur | submit`)  
✔ Decide **how** errors feel (`polite | assertive`)  
✔ Control **success feedback**  
✔ Prevent **layout shift**  
✔ Work with existing form libraries  

❌ Does NOT validate data  
❌ Does NOT render UI  
❌ Does NOT replace your form library  

---

## The mental model

> **Forms report facts.  
> Fields decide behavior.**

The form tells a field:
- is there an error?
- has the user interacted?
- is the value valid?
- was the form submitted?

The field decides:
- should feedback appear now?
- what UX state applies?

---

## Installation

```bash
npm install @smatt92/uxspec-form
```

## Core idea (framework-agnostic)

```bash
import { uxField } from "@smatt92/uxspec-form"

const emailUX = uxField({
  name: "email",
  validateOn: "blur",
  errorTone: "polite",
  successFeedback: "subtle",
  reserveErrorSpace: true
})
```
This is a UX contract, not a validator.

## React Hook Form example

```bash
import { useForm } from "react-hook-form"
import { useReactHookFormUX } from "@smatt92/uxspec-form"

const form = useForm()

const ux = useReactHookFormUX({
  config: {
    name: "email",
    validateOn: "blur",
    successFeedback: "subtle",
    reserveErrorSpace: true
  },
  error: form.formState.errors.email,
  touched: form.formState.touchedFields.email,
  isValid: !form.formState.errors.email,
  isSubmitted: form.formState.isSubmitted
})
<input {...form.register("email", { required: true })} />

<div className={ux.helperClassName}>
  {ux.showError && "Email is required"}
  {ux.showSuccess && "Looks good"}
</div>
```
## What you get back

```bash
{
    showError: boolean
    showSuccess: boolean
    errorClassName: string
    helperClassName: string
}
```
You decide what to render.
UXSpec decides when.

## Why this is different

| Typical forms             | uxspec-form                 |
| ------------------------- | --------------------------- |
| Errors appear immediately | Errors appear intentionally |
| UX rules are implicit     | UX rules are explicit       |
| Validation drives UX      | UX drives feedback          |
| Hard to reuse             | Portable UX contracts       |

## Version

v0.2.3

Stable UX core
React Hook Form adapter
Deterministic UX behavior

## License
MIT