import { Component } from "../core/base"

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.classList.add('footer')
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