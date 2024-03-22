import { Component } from "../core/base";

export default class NewProfile extends Component {
  constructor() {
    super();
    this.onSubmit = () => {};
  }

  toggleModal(open) {
    if (this.el) {
      this.el.style.display = open ? 'block' : 'none';
    }
  }
  render() {
    this.el = document.createElement('div');
    this.el.classList.add('profile', 'new-profile');
    this.el.innerHTML = /* html */ `
      <div class="container">
        <h1 class="title">new&nbsp;<span class="logo--black"></span>&nbsp;character</h1>
        <form id="newForm" class="form form__new">
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
          <div class="form__field field-name">
            <label>
              <span class="title">Name</span>
              <input type="text" name="name" id="name" class="form__input">
            </label>
          </div>
          <div class="form__field field-kind">
            <label>
              <span class="title">Kind of Toy</span>
              <input type="text" name="kind" id="kind" class="form__input">
            </label>
          </div>
          <div class="form__field field-trait">
            <label>
              <span class="title">Trait</span>
              <textarea name="trait" id="trait" class="form__input"></textarea>
            </label>
          </div>
          <div class="form-btn-group btn-group">
            <button type="submit" class="btn" id="btn-create">Create</button> 
            <a href="#/" class="btn btn--cancel" id="btn-cancel">Cancel</a> 
          </div> 
        </form>
      </div>
    `;
    const fileInput = this.el.querySelector('.upload-file .input-file');
    const deleteBtn = this.el.querySelector('.upload-file .btn--cancel');

    // 이미지 업로드
    fileInput.addEventListener('change', () => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        const uploadImg = fileReader.result;
        this.el.querySelector('.img-view').style.backgroundImage = `url(${uploadImg})`;
        deleteBtn.style.display = 'block';
      });
      fileReader.readAsDataURL(fileInput.files[0]);
    });

    // 이미지 삭제
    deleteBtn.addEventListener('click', () => {
      this.el.querySelector('.img-view').style.backgroundImage = '';
      fileInput.value = '';
      deleteBtn.style.display = 'none';
    });


    // 폼 제출 이벤트

    // DOM 접근
    const nameInput = this.el.querySelector('#name');
    const kindInput = this.el.querySelector('#kind');
    const traitInput = this.el.querySelector('#trait');
    const createProfileBtn = this.el.querySelector('#btn-create');

    // 프로필 추가 버튼
    createProfileBtn.addEventListener('click', createCharacterItem);

    // 캐릭터 저장될 배열. JSON문자열을 객체형태로 바꿔서 사용함
    const tasks = JSON.parse(localStorage.getItem('characterList')) || [];

    // 저장되어 있는 tasks를 이용해 목록을 생성함
    if (tasks.length > 0) {
      tasks.forEach((task) => {
        genItem(task.character, task.checked);
      });
    }

    // ------------ 함수 코드 모음 부분 ------------ //

    // 캐릭터 목록 만들기
    function createCharacterItem() {
      const inputValue1 = nameInput.value; 
      const inputValue2 = kindInput.value; 
      const inputValue3 = traitInput.value;

      // input에 내용이 있으면
      if (inputValue1, inputValue2, inputValue3) {
        // characterTask 객체를 생성함, tasks 배열에 저장함
        const characterTask = {
          character: {
            inputValue1,
            inputValue2,
            inputValue3
          },
          checked: false
        };

        // characterTask 객체를 캐릭터 배열에 저장함
        tasks.push(characterTask);

        // 캐릭터 목록 요소 생성 함수
        listItem([nameInput, kindInput, traitInput], false);
      } else {
        errorMessage('내용을 작성해주세요.');
      }
    } 

    return this.el;
  }
}