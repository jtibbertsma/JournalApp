JournalApp.Views.PostIndexItem = Backbone.View.extend({
  template: JST["postIndexItem"],
  tagName: "li",


  events: {
    "click .delete": "removePost",
    "click .edit": "renderEdit",
    "click p": "onClick"
  },

  removePost: function () {
    this.model.destroy();
  },

  onClick: function() {
    Backbone.history.navigate("/posts/" + this.model.id, {trigger: true});
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  renderEdit: function() {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  }

});
