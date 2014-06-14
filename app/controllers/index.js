import Ember from 'ember';

export default Ember.Controller.extend({
  image: null,
  blur: 0,
  grayscale: 0,
  opacity: 1,

  filters: ['blur', 'grayscale', 'opacity'],

  computedStyle: function() {
    var style = '-webkit-filter: ';
    var _this = this;

    style = style + 'blur(' + this.get('blur') + 'px) ';
    style = style + 'opacity(' + this.get('opacity') + ') ';
    style = style + 'grayscale(' + this.get('grayscale') + ') ';

    style = style + ';';

    return style;
  }.property('blur', 'grayscale', 'opacity')
});
