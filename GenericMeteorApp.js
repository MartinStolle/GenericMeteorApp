simulators = new Mongo.Collection("simulators");

if (Meteor.isClient) {
    Template.body.helpers({
        simulators: function() {
            return simulators.find({});
        }
    });
    
Template.body.events({
    "click #add": function (event) {
        var name = document.getElementById("name").value;
        var ip = document.getElementById("ip").value;

        simulators.insert({
            name: name,
            ip: ip,
            status: "available"
        });

        document.getElementById("name").value = "";
        document.getElementById("ip").value = "";
        return false;
    },
    "click #delete": function () {
        simulators.remove(this._id);
    }
});
}