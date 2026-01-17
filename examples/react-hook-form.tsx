import { useForm } from "react-hook-form"
import { uxField, useFormUX } from "@uxspec/form"

const emailUX = uxField({
  name: "email",
  required: true,
  validateOn: "blur",
  errorTone: "polite",
  reserveErrorSpace: true,
  successFeedback: "subtle",
})

export function Example() {
  const {
    register,
    formState: { errors, touchedFields },
  } = useForm()

  const ux = useFormUX({
    config: emailUX,
    error: errors.email?.message as string,
    touched: touchedFields.email,
    valid: !errors.email,
  })

  return (
    <div>
      <input {...register("email")} />
      <div className={ux.helperClassName}>
        {ux.showError && (
          <span className={ux.errorClassName}>
            Invalid email
          </span>
        )}
        {ux.showSuccess && <span>Looks good</span>}
      </div>
    </div>
  )
}
