class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = tabElement.dataset.tab; 

      if (this.tabData === 'all') {
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"`);
      }

      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.tabElement.addEventListener('click', this.selectTab);
    }
  
    selectTab = () => {
      const tabs = document.querySelectorAll('.tabs span');
      tabs.forEach(tab => tab.classList.remove('selected'));
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.style.display = 'none');
      this.tabElement.classList.add('selected');
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
      this.cardElement.style.display = 'flex';
    }
  }
  
  document.querySelectorAll('.tabs span').forEach(tab => new TabLink(tab));