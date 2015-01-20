var _ = require('underscore'),
    app = require('../namespace'),
    Backbone = require('backbone'),
    MessageModel = require('../models/message'),
    template = require('../templates/form.hbs');    

module.exports = Backbone.View.extend({

  events: {
    'click #submit-message' : 'onMessageSubmit'
  },

  initialize: function(options){
    this.model = new MessageModel();
    this.messages = options.messages;

    this.messages = app.ref.child('messages');
  },

  onMessageSubmit: function(event){
    event.preventDefault();

    // We're assuming app.user.yadayada will be here because as soon
    // as a logout event occurs this view will killed

    // TODO: make sure this view is really killed on logout events

    var message = this.$message.val();

    if (message){
      this.messages.push({
        author: app.user.authData.userName,
        message: this.$('[name="message"]').val()
      });
    }
    else {
      this.$message.parent().toggleClass('has-warning', true);
    }
  },

  render: function(){
    console.log('form view render');
    this.$el.html(template());

    this.$message = this.$('#message');

    return this;
  }

});