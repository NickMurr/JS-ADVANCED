import { Component } from "./Component";

export interface IBox {
  selector: string;
  size: number;
  color: string;
}

export class Box extends Component {
  public selector: any;

  constructor(options: IBox) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}
