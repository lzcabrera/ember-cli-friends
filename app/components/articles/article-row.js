import Ember from 'ember';
//import layout from '../templates/components/articles/article-row';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null, // passed-in
  actions: {
    saveArticle: function(article) {
      this.sendAction('save', article);
    }
  },
  autoSave: function() {
    var article = this.get('article');
    if(!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  stateChanged: Ember.observer('article.state', function() {
    var article = this.get('article');
    if(article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }).on('init')
});
