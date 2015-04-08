simulators = new Mongo.Collection("simulators");

if (Meteor.isClient) {
    Template.body.helpers({
        simulators: function() {
            return simulators.find({});
        }
    });
    
Template.body.events({
  "submit form": function (event) {
      var name = event.target.name.value;
      var ip = event.target.ip.value;
      
      simulators.insert({
          name: name,
          ip: ip,
          status: "available"
      });
      
      event.target.name.value = "";
      event.target.ip.value = "";
      return false;
  }
});
}