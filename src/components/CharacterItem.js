import { Component } from "../core/base";

export default class CharacterItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li',
      props: payload.props
    });
  }
  render() {
    this.el.classList.add('character__item');
    this.el.innerHTML = /* html */ `
      <div class="checkbox">
        <label class="label">
          <input type="checkbox"/>
          <span class="checkmark">
            <i class="fa-solid fa-check"></i>
          </span>
        </label>
      </div>
      <div class="img woody"></div>
      <p class="name">${this.props.name}</p>
      <p class="info kind">
        <i class="fa-solid fa-tag"></i>
        ${this.props.kind}
      </p>
      <p class="info trait">
        <i class="fa-solid fa-star"></i>
        ${this.props.trait}
      </p>
      <a href="#/viewProfile" class="btn">View Profile</a>
    `;
  }
}