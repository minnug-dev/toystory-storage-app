import { Component } from "../core/heropy"

export default class Search extends Component {
  render() {
    this.el.classList.add('search', 'inner')
    this.el.innerHTML = /* html */ `
      <input type="search" placeholder="Search ToyStory Characters" class="input" />
      <button type="button" class="btn-search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    `

    const searchEl = this.el.querySelector('input')
    searchEl.addEventListener('input', () => {
      //
    })
    searchEl.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        //
      }
    })

    const searchBtnEl = this.el.querySelector('.btn-search')
    searchBtnEl.addEventListener('click', () => {
      
    })
  }
}