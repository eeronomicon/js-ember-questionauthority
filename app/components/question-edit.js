import Ember from 'ember';

export default Ember.Component.extend({
  displayQuestionEdit: false,
  actions: {
    displayQuestionUpdate() {
      this.set('displayQuestionEdit', true);
    },
    hideQuestionUpdate() {
      this.set('displayQuestionEdit', false);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.set('displayQuestionEdit', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
