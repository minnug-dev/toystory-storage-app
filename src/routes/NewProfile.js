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
              <div class="upload-btn-group btn-group">
                <span class="btn">Add Image</span>
                <button type="button" class="btn btn--cancel">Delete Image</button>
              </div>
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
          <div class="form-btn-group btn-group">
            <button type="submit" class="btn">upload</button> 
            <a href="#/" class="btn btn--cancel">Cancel</a> 
          </div> 
        </form>
      </div>
    `
    const fileInput = this.el.querySelector('.upload-file .input-file');
    const deleteBtn = this.el.querySelector('.upload-file .btn--cancel');

    // 이미지 업로드
    fileInput.addEventListener('change', () => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        const uploadImg = fileReader.result;
        this.el.querySelector('.img-view').style.backgroundImage = `url(${uploadImg})`;
        deleteBtn.style.display = 'block';
      })
      fileReader.readAsDataURL(fileInput.files[0]);
    })

    // 이미지 삭제
    deleteBtn.addEventListener('click', () => {
      this.el.querySelector('.img-view').style.backgroundImage = '';
      fileInput.value = '';
      deleteBtn.style.display = 'none';
    })
  };
};