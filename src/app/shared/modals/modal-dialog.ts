export interface ModalDialogControlButton {
  id: string;
  text: string;
  classes?: string;
  isEnabled?: boolean;
  isVisible?: boolean;
  action: (modalDialog: any) => void;
}
