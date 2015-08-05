JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: JournalApp.Models.Post,

  getOrFetch: function(id){
    var model = this.get(id);
    if (!model) {
      model = new JournalApp.Models.Post({id: id});
      model.fetch();
      this.add(model);
    }
    return model;
  }
});
