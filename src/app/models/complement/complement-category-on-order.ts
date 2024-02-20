export class ComplementCategoryOnOrder {
  private amountAvailableTotal: number;
  readonly name: string;
  private sizeSelected: string;
  private amountAvailable: number;
  private readonly sizes: ComplementSize[];
  readonly items: ComplementOrderItem[] = [];

  constructor(categoryName: string, sizes: ComplementSize[], items: ComplementOrderItem[]) {
    this.name = categoryName;
    this.amountAvailableTotal = 0;
    this.sizeSelected = '';
    this.amountAvailable = 0;
    const sizeSelected = sizes?.[0].sizeDescription;
    this.sizes = sizes;
    this.items = items;

    this.changeSize(sizeSelected);
  }

  changeSize(size: string): void {
    const sizeIndex = this.sizes.findIndex(sizeItem => sizeItem.sizeDescription === size);
    if (sizeIndex === -1)
      throw new Error('size does not exists.');

    const { sizeDescription, amountAvailable} = this.sizes[sizeIndex];
    this.sizeSelected = sizeDescription;
    this.amountAvailableTotal = amountAvailable;
    this.amountAvailable = amountAvailable;

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].removeAll();
    }
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

export class ComplementSize {
  readonly sizeDescription: string;
  readonly amountAvailable: number

  constructor(size: string, amountAvailable: number) {
    this.sizeDescription = size;
    this.amountAvailable = amountAvailable;
  }
}

export class ComplementOrderItem {
  private readonly name: string;
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

  public removeAll() {
    this.amountSelected = 0;
  }
}
