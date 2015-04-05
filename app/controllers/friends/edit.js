import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      return !Ember.isEmpty(this.get('model.email')) &&
      !Ember.isEmpty('model.firstName') &&
      !Ember.isEmpty('model.lastName') &&
      !Ember.isEmpty('model.twitter');
    }
  ),
  actions: {
  save: function() {
    if(this.get('isValid')) {
      var _this = this;
      this.get('model').save().then(function(friend) {
        _this.transitionToRoute('friends.show', friend);
      });
    } else {
      this.set('errorMessage', 'You have to fill all the fields');
    }
    return false;
  },
  cancel: function() {
    this.transitionToRoute('friends.show', this.get('model'));
    return false;
  }
}
});
