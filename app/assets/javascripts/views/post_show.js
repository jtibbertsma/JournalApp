JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);

  },

  events: {
    "click .edit": "renderEdit",
    "click .delete": "renderDelete",
    "dblclick .title": "editTitle",
    "dblclick .body": "editBody"
  },

  template: JST["postShow"],

  render: function() {
    this.$el.html(this.template({post: this.model}));
    // $(".content").on("dblclick", ".title", this.editTitle.bind(this));
    // $(".content").on("dblclick", ".body", this.editBody.bind(this));

    return this;
  },

  editTitle: function() {
    var $textarea = $("<input type = 'text' value = '"+ this.model.escape('title') + "'>");
    var $h2 = $(".title");
    $h2.replaceWith($textarea);
    $textarea.on("blur", function(){
      var title = $textarea.val();
      this.model.save({title: title});
      $h2.text(title);
      $textarea.replaceWith($h2);
    }.bind(this));
  },

  editBody: function() {
    var $textarea = $("<textarea>").text(this.model.escape('body'));
    var $p = $(".body");
    $p.replaceWith($textarea);
    $textarea.on("blur", function(){
      var body = $textarea.val();
      this.model.save({body: body});
      $p.text(body);
      $textarea.replaceWith($p);
    }.bind(this));
  },

  renderEdit: function() {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  },

  renderDelete: function() {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  }
});
