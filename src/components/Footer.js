import { Component } from "../core/heropy"

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.classList.add('footer', 'inner')
    this.el.innerHTML = /* html */ `
      <div>
        <p class="copyright">
          &copy; COPYRIGHT 
          <span>${new Date().getFullYear()}</span> 
          ParkMinJoo. All Rights Reserved.
        </p>
      </div>    
    `
  }
}