import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question.id);
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('index');
    },

    upVote(answer) {
      var newScore =  answer.get('score') + 1;
      answer.set('score', newScore);
      answer.save();
    },

    downVote(answer) {
      var newScore =  answer.get('score') - 1;
      answer.set('score', newScore);
      answer.save();
    }


  }
});
