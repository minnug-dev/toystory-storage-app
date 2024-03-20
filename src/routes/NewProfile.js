import { Component } from "../core/heropy"

export default class View extends Component {
  render() {
    this.el.classList.add('new-profile')
    this.el.innerHTML = /* html */ `
      <div class="container">
        <h1 class="title">NEW&nbsp;<span class="logo--black"></span>&nbsp;CHARACTER</h1>
        <div class="form">
          <div class="img"></div>
          <div class="input__field">
            <label>
              Name
              <input type="text">
            </label>
          </div>
          <div class="input__field">
            <label>
              Kind of Toy
              <input type="text">
            </label>
          </div>
          <div class="input__field">
            <label>
              Trait 
              <input type="text">
            </label>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn">Create</button> 
            <button type="submit" class="btn btn--red">Cancle</button> 
          </div> 
        </div>
      </div>
    `
  }
}