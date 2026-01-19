[![npm version](https://img.shields.io/npm/v/@smatt92/uxspec-form.svg)](https://www.npmjs.com/package/@smatt92/uxspec-form)

uxspec-form

Predictable form feedback — by design.
Stop guessing when errors should appear. Make it explicit.

uxspec-form is a UX-first abstraction for form feedback.
It does not validate data.
It decides when and how feedback appears.

Why this exists

Most form libraries answer:

❓ “Is this field valid?”

But users experience a different problem:

❓ “Why is this error showing now?”

uxspec-form separates validation logic from UX behavior so that:

Errors don’t appear too early

Success feedback isn’t noisy

Layout doesn’t jump unexpectedly

UX rules are explicit, reusable, and testable

What this library does (and does not do)
✅ It does

Decide when errors appear (change, blur, submit)

Decide how errors feel (polite, assertive)

Control success feedback

Prevent layout shift

Work with existing form libraries via adapters

❌ It does not

Validate values

Manage form state

Render UI

Replace your form library

Mental model (important)

Forms report facts.
Fields decide behavior.

The form tells a field:

Is there an error?

Has the user interacted?

Is the value valid?

Has the form been submitted?

The field decides:

Should an error be visible now?

Should success feedback appear?

What CSS state applies?

Installation
npm install uxspec-form

Core concepts
UX Field Config

A UX contract, not a validator.

import { uxField } from "uxspec-form"

const emailUX = uxField({
  name: "email",
  validateOn: "blur",
  errorTone: "polite",
  successFeedback: "subtle",
  reserveErrorSpace: true
})

Available options
validateOn: "change" | "blur" | "submit"
errorTone: "polite" | "assertive"
successFeedback: "none" | "subtle"
reserveErrorSpace: boolean

Using with React Hook Form (adapter)

uxspec-form ships with a React Hook Form adapter.

Example
import { useForm } from "react-hook-form"
import { useReactHookFormUX } from "uxspec-form"

export function ExampleForm() {
  const {
    register,
    formState: { errors, touchedFields, isSubmitted }
  } = useForm()

  const emailUX = useReactHookFormUX({
    config: {
      name: "email",
      validateOn: "blur",
      errorTone: "polite",
      successFeedback: "subtle",
      reserveErrorSpace: true
    },
    error: errors.email,
    touched: touchedFields.email,
    isValid: !errors.email,
    isSubmitted
  })

  return (
    <div>
      <input {...register("email", { required: true })} />

      <div className={emailUX.helperClassName}>
        {emailUX.showError && "Email is required"}
        {emailUX.showSuccess && "Looks good"}
      </div>
    </div>
  )
}

What the adapter gives you
{
  showError: boolean
  showSuccess: boolean
  errorClassName: string
  helperClassName: string
}


You decide:

what text to show

what UI to render

what styles to apply

Styling (example)
.ux-helper-reserved {
  min-height: 20px;
}

.ux-helper-error {
  color: #d32f2f;
}

.ux-helper-success {
  color: #2e7d32;
}

.ux-error-assertive {
  font-weight: bold;
}

Why this is different
Typical forms	uxspec-form
Errors appear immediately	Errors appear intentionally
UX rules are implicit	UX rules are explicit
Validation drives UX	UX drives feedback
Hard to reuse	Portable UX contracts
Versioning
v0.2.0

Introduced adapters

Explicit form phase model

Stable UX decision engine

React Hook Form adapter included

Who this is for

Designers who care about form behavior

Frontend engineers tired of “why is this showing?”

Teams that want consistent UX rules

Products with complex or sensitive forms

What’s next

CodeSandbox demo

Visual examples in README

v0.2.1 ergonomics pass

More adapters (Formik, TanStack Form)

Philosophy (final note)

Validation answers “is it wrong?”
UX answers “should we say something?”

uxspec-form exists for the second question.