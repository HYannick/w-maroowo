import gsap from 'gsap';

export class CountryMapEntry {
  DOM: Record<string, any>;
  isHidden: boolean = false;
  constructor(el: Element) {
    this.DOM = {el};
    this.init();
  }

  init() {
    this.DOM.title = this.DOM.el.querySelector('.city-details .city-name');
    this.DOM.description = this.DOM.el.querySelector('.city-details .city-description');
    this.DOM.images = this.DOM.el.querySelectorAll('.city-picture img');
  }

  show() {
    this.isHidden = false
    return this.toggle()
  }

  hide() {
    this.isHidden = true
    return this.toggle()
  }

  toggle() {
    return Promise.all([
      this.toggleTitle(),
      this.toggleDescription(),
      this.toggleImages()
    ])
  }

  toggleTitle() {
    return gsap.fromTo(this.DOM.title, {
      opacity: this.isHidden ? 1 : 0,
      y: this.isHidden ? 0 : '100%',
    }, {
      opacity: this.isHidden ? 0 : 1,
      y: this.isHidden ? '-100%' : 0,
      duration: 1,
      ease: 'expo.inOut'
    })
  }

  toggleDescription() {
    return gsap.fromTo(this.DOM.description, {
      opacity: this.isHidden ? 1 : 0,
      y: this.isHidden ? 0 : '100%',
    }, {
      opacity: this.isHidden ? 0 : 1,
      y: this.isHidden ? '-100%' : 0,
      duration: 1,
      ease: 'expo.inOut'
    })
  }


  toggleImages() {
    return gsap.fromTo(this.DOM.images, {
      opacity: this.isHidden ? 1 : 0.8,
      x: this.isHidden ? 0 : '100%',
    }, {
      opacity: this.isHidden ? 0.8 : 1,
      x: this.isHidden ? '-100%' : 0,
      duration: 1,
      stagger: 0.05,
      ease: 'expo.inOut'
    })
  }
}