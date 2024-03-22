import { Component } from "../core/base";

export default class EditProfile extends Component {
  render() {
    this.el.classList.add('profile', 'edit-profile');
    this.el.innerHTML = /* html */ `
      <div class="container">
        <h1 class="title">my&nbsp;<span class="logo--black"></span>&nbsp;profile</h1>
        <form class="form">
          <div class="upload-file">
            <div id="viewImg" class="img-view"></div>
          </div>
          <div class="form__field">
            <label>
              <span class="title">Name</span>
              <input type="text" value="Woody">
            </label>
          </div>
          <div class="form__field">
            <label>
              <span class="title">Kind</span>
              <input type="text" value="Cowboy toy with pull-string voice box">
            </label>
          </div>
          <div class="form__field">
            <label>
              <span class="title">Trait</span>
              <textarea value="Duke Caboom is a 1970s toy based on Canada greatest stuntman. Riding his powerful Caboom stunt-cycle, Duke is always prepared to show off his stunt poses with confidence and swagger. However, Woody learns quickly that Duke has an Achilles heel: He has never been able to do the awesome stunts advertised in his own toy commercial. For years, Duke has been sitting in an antique store, constantly reliving the failures of his tragic past."></textarea>
            </label>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn">Save</button> 
            <a href="#/" class="btn btn--cancel btn-close">cancel</a> 
          </div> 
        </form>
      </div>
    `;
  }
}