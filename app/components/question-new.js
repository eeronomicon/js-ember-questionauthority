import Ember from 'ember';

export default Ember.Component.extend({
  displayQuestionForm : false,
  actions: {
    showQuestionForm() {
      this.set('displayQuestionForm', true);
    },
    hideQuestionForm() {
      this.set('displayQuestionForm', false);
    },
    newQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        question: this.get('question') ? this.get('question') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      };
      this.sendAction('saveQuestion', params);
      this.set('displayQuestionForm', false);
    }
  }
});
