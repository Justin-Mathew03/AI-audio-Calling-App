import {
  CommandResponsiveDialog,
  CommandDialog,
  CommandInput,
  Command,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <Command>
        <CommandInput placeholder="Find a meeting or agent" />
        <CommandList>
          <CommandItem>test</CommandItem>
        </CommandList>
      </Command>
    </CommandResponsiveDialog>
  );
};
