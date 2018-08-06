class Modal {
  constructor(modal, overlay, buttons = {}) {
    this.overlay = overlay;
    this.modal = modal;
    this.openButton = buttons.openButton;
  }

  setEventListeners() {
    this.overlay.addEventListener('click', this.close.bind(this))
    this.openButton.addEventListener('click', this.open.bind(this))
  }

  open() {
    this.overlay.classList.add('visible');
    this.modal.classList.add('visible')
  }

  close() {
    this.overlay.classList.remove('visible');
    this.modal.classList.remove('visible');
  }
}



// 課題① 上を写経する
// 課題② JSONサーバーを立てる
//       markdownEditorを作成する(JS or Coffee)
//       JSONサーバーにPOSTリクエストでmarkdownを送る