import { Component } from "../core/heropy"

export default class View extends Component {
  render() {
    this.el.classList.add('new-profile')
    this.el.innerHTML = /* html */ `
      <div class="container">
        <h1 class="title">NEW&nbsp;<span class="logo--black"></span>&nbsp;CHARACTER</h1>
        <form class="form">
          <div class="upload-file">
            <div id="viewImg" class="img-view"></div>
            <label for="file">
              <span class="btn">Click to Upload Image</span>
              <input type="file" id="file" accept="image/*" class="input-file">
            </label>
          </div>
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
            <button type="submit" class="btn">Upload</button> 
            <button type="submit" class="btn btn--red">Cancle</button> 
          </div> 
        </form>
      </div>
    `
    // 이미지 업로드
    const fileInput = this.el.querySelector('.input-file');
    fileInput.addEventListener('change', () => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        const uploadImg = fileReader.result;
        this.el.querySelector('.img-view').style.backgroundImage = `url(${uploadImg})`;
      })
      fileReader.readAsDataURL(fileInput.files[0]);
    })
  };
};