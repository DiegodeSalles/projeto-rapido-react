import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
// import { SelectItem } from "@radix-ui/react-select";
import styles from "./Dropdown.module.css";

export function Dropdown() {
  return (
    <Select.Root>
      <Select.Trigger className={styles.SelectTrigger} aria-label="usuarios">
        <Select.Value placeholder="Usuário" />
        <Select.Icon className={styles.SelectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal container={document.getElementById("formulario")}>
        <Select.Content className={styles.SelectContent}>
          <Select.ScrollUpButton className={styles.SelectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={styles.SelectViewport}>
            <Select.Group>
              <Select.Label className={styles.SelectLabel}>
                Usuários
              </Select.Label>
              <Select.SelectItem
                className={styles.SelectItem}
                value="usuario 1"
              >
                Usuario 1
              </Select.SelectItem>
              <Select.SelectItem
                className={styles.SelectItem}
                value="usuario 2"
              >
                Usuario 2
              </Select.SelectItem>
              <Select.SelectItem
                className={styles.SelectItem}
                value="usuario 3"
              >
                Usuario 3
              </Select.SelectItem>
              <Select.SelectItem
                className={styles.SelectItem}
                value="usuario 4"
              >
                Usuario 4
              </Select.SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.SelectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
