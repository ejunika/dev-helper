export class AppMenuItem {
  id: string | number;
  displayText: string;
  navigationLink?: string;
  children?: Array<AppMenuItem>;
}
