import { Component, h } from "@stencil/core";

@Component({
  tag: "peid-card",
  styleUrls: ["card.css", "../../../global/app.css"],
  shadow: true
})
export class Card {
  render() {
    return (
      <div class="card-inner">
        <slot name="start" />
        <slot />
        <slot name="end" />
      </div>
    );
  }
}