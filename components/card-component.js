class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.header = document.createElement('header')
    this.header.innerHTML = '<slot name="header"></slot>'

    this.content = document.createElement('section')
    this.content.innerHTML = '<slot name="content"></slot>'
    this.content.className = 'content'

    this.default = document.createElement('div')
    this.default.innerHTML = '<slot></slot>'
    this.default.className = 'comment'

    this.linkCSS = document.createElement('link')
    this.linkCSS.rel = 'stylesheet'
    this.linkCSS.href = './components/card-component.css'
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'wrapper'
    this.wrapper.append(this.linkCSS, this.header, this.content, this.default)
 
  }
  connectedCallback() { 
    this.attachShadow({mode:'open'})
    this.shadowRoot.append(this.wrapper)
  }
}
customElements.define('card-component', CardComponent)