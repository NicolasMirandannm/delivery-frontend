export class ComplementCategory {
  readonly amountAvailableTotal: number;
  readonly name: string;
  private amountAvailable: number;
  readonly items: ComplementOrderItem[] = [];

  constructor(categoryName: string, amountAvailable: number, items: ComplementOrderItem[]) {
    this.name = categoryName;
    this.amountAvailable = amountAvailable;
    this.amountAvailableTotal = amountAvailable;
    this.items = items;
  }

  addItem(index: number): void {
    if (this.amountAvailable <= this.amountAvailableTotal && this.amountAvailable > 0) {
      this.items[index].add();
      this.amountAvailable--;
    }
  }

  removeItem(index: number): void {
    if (this.amountAvailableTotal > 0) {
      this.items[index].remove();
      this.amountAvailable++;
    }
  }

  getAmountAvailable(): number {
    return this.amountAvailable;
  }
}

export class ComplementOrderItem {
  private name: string;
  private amountSelected: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getAmountSelected(): number {
    return this.amountSelected;
  }

  add(): void {
    this.amountSelected++;
  }

  remove(): void {
    this.amountSelected--;
  }
}
