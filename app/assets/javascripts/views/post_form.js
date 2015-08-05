JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["postForm"],
  tagName: "form",

  events: {
    "submit": "submitForm"
  },

  render: function () {
    this.$el.html(this.template({post: this.model}))
    return this;
  },

  submitForm: function (e) {
    e.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.save(formData);
    Backbone.history.navigate("posts/" + this.model.id, {trigger: true})
  }
});
