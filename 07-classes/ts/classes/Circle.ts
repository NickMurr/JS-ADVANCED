import { Box, IBox } from "./Box";

export class Circle extends Box {
  constructor(options: IBox) {
    super(options);
    this.$el.style.borderRadius = "50%";
  }
}
