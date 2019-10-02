export class Component {
  public $el: HTMLElementTagNameMap | any;
  public showEl: boolean = true;

  constructor(selector: any) {
    this.$el = document.querySelector(selector);
    this.$el.style.transition = "all 0.5s ease";

    this.$el.addEventListener("click", () => {
      this.showEl = !this.showEl;
      !this.showEl ? this.hide() : this.show();
    });
  }

  public hide() {
    this.$el.style.opacity = "0";
  }

  public show() {
    this.$el.style.opacity = "1";
  }
}
