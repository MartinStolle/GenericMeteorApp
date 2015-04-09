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
    "click #edit": function () {
        var selectedSimulator = Session.get('selectedSimulator');
        var name = document.getElementById("name").value;
        var ip = document.getElementById("ip").value;
        simulators.update(selectedSimulator, {$set: {name: name, ip: ip}});
    },    
    "click #delete": function () {
        simulators.remove(this._id);
    },
    "click td": function () {
        var simulatorId = this._id;
        var simulator = simulators.findOne(simulatorId);
        document.getElementById("name").value = simulator.name;
        document.getElementById("ip").value = simulator.ip;
        Session.set('selectedSimulator', simulatorId);
    },
});
}