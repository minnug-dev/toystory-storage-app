import { Component } from "../core/heropy"

export default class CharacterItem extends Component {
  constructor(payload) {
    super({
      tagName: 'li',
      props: payload.props
    })
  }
  render() {
    this.el.classList.add('character__item')
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
      <p class="kind">${this.props.kind}</p>
      <button type="button" class="btn">View Profile Detail</button>
    `
  }
}