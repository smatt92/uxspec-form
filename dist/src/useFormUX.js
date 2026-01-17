import { resolveUXState } from "./uxField";
export function useFormUX({ config, error, touched = false, valid = false, }) {
    return resolveUXState(config, Boolean(error), touched, valid);
}
