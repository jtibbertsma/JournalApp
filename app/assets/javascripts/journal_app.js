window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('.content')
    var router = new JournalApp.Routers.PostRouter({$rootEl: $rootEl});
    Backbone.history.start()
    $(".new").on("click", this.renderNew)
  },

  renderNew: function(e) {
    e.preventDefault();
    Backbone.history.navigate("posts/", {trigger: true});
    Backbone.history.navigate("posts/new", {trigger: true});
  }


};

$(document).ready(function(){
  JournalApp.initialize();
});
