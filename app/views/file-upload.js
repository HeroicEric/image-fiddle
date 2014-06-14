import Ember from 'ember';

export default Ember.TextField.extend({
  tagName: 'input',
  attributeBindings: ['name'],
  type: 'file',
  file: null,
  change: function(event) {
    var fileReader = new FileReader();
    var _this = this;

    fileReader.onload = function(e) {
      var file = e.target.result;

      Ember.run(function() {
        _this.set('file', fileReader.result);
      });
    };

    return fileReader.readAsDataURL(event.target.files[0]);
  }
});
