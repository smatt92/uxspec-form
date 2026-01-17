# @uxspec/form

Forms fail users not because of bad validation,
but because of bad feedback timing, layout shifts,
and inconsistent error behavior.

@uxspec/form introduces **UX contracts** for forms.

## Install
npm install @uxspec/form

## Example
```ts
const emailUX = uxField({
  name: "email",
  validateOn: "blur",
  reserveErrorSpace: true,
})
