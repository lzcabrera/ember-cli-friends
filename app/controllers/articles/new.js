import Ember from 'ember';

export default Ember.Controller.extend({
  // hasDescription: Ember.computed.notEmpty('description'),
  // hasNotes: Ember.computed.notEmpty('notes'),
  // isValid: Ember.computed.and('hasDescription', 'hasNotes'),

  //isValid: Ember.computed.notEmpty('description'),
  //
  isValid: Ember.computed(
    'model.description',
    function(){
      return !Ember.isEmpty(this.get('model.description'));
    }
  ),
  actions: {
    save: function() {
      if(this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields. xxx');
        return false;
      }
    }
  }
});