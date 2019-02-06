export class TicketState {
  private _data: Array<Ticket>;
  private _id: string;
  private _label: string;

  constructor(id: string, label: string, tickets?: Array<Ticket>) {
    this._data = [];
    this._id = id;
    this._label = label;
    if (tickets) {
      this._data = tickets;
    } else {
      this._data = [];
    }
  }

  get tickets() {
    return this._data;
  }

  set tickets(data: Array<Ticket>) {
    this._data = data;
  }

  get id() {
    return this._id;
  }

  get label() {
    return this._label;
  }
}

export class Ticket {
  private _id: string;
  private _title: string;
  private _details: string;
  private _tags: Array<Tag>;
  private _isActive?: boolean;
  private _createdAt?: Date;
  private _updatedAt?: Date;
  private _createdBy?: string;
  private _isDone?: boolean;

  constructor(id: string, title: string, details: string) {
    this._id = id;
    this._title = title;
    this._details = details;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._tags = [];
    this._isActive = false;
    this._isDone = false;
  }

  public get id(): string {
    return this._id;
  }

  public set id(v: string) {
    this._id = v;
  }

  public get title(): string {
    return this._title;
  }

  public set title(v: string) {
    this._title = v;
  }

  public get details(): string {
    return this._details;
  }

  public set details(v: string) {
    this._details = v;
  }

  public get tags(): Array<Tag> {
    return this._tags;
  }

  public set tags(v: Array<Tag>) {
    this._tags = v;
  }

  public get isActive(): boolean {
    return this._isActive;
  }

  public set isActive(v: boolean) {
    this._isActive = v;
  }

  public get isDone(): boolean {
    return this._isDone;
  }

  public set isDone(v: boolean) {
    this._isDone = v;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(v: Date) {
    this._createdAt = v;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(v: Date) {
    this._updatedAt = v;
  }

  public get createdBy(): string {
    return this._createdBy;
  }

  public set createdBy(v: string) {
    this._createdBy = v;
  }

  public addTag(v: Tag): Ticket {
    this.addTagIfNotExists(v);
    return this;
  }

  private addTagIfNotExists(v: Tag) {
    for (let i = 0; i < this._tags.length; i++) {
      if (this._tags[i].id === v.id) {
        return false;
      }
    }
    this._tags.push(v);
    return true;
  }
}

export interface Tag {
  id: string;
  name: string;
  label: string;
  color: { code?: string; cssClass?: string };
}

export interface Glance {
  id: string;
  name: string;
  value: { fix: string; pre: boolean; count: number; percent: number };
  icon: { src?: string; iClasses?: string; useSrc?: boolean };
}
