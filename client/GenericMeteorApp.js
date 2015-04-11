Meteor.subscribe('Simulators');

Template.simulatortable.helpers({
    simulators: function () {
        return simulators.find({});
    }
});

Template.body.events({
    "click #add": function (event) {
        // Prevent the browser from applying default behaviour to the form
        event.preventDefault();
        var name = document.getElementById("name").value;
        var ip = document.getElementById("ip").value;
        var status = document.getElementById("status").value;

        Meteor.call('insertSimulator', name, ip, status);

        document.getElementById("name").value = "";
        document.getElementById("ip").value = "";
        return false;
    },
    "click #edit": function () {
        event.preventDefault();
        var selectedSimulator = Session.get('selectedSimulator');
        var name = document.getElementById("name").value;
        var ip = document.getElementById("ip").value;
        var status = document.getElementById("status").value;
        Meteor.call('modifySimulator', selectedSimulator, name, ip, status);
    },
    "click #delete": function () {
        Meteor.call('removeSimulator', this._id);
    },
    "click td": function () {
        var simulatorId = this._id;
        var simulator = simulators.findOne(simulatorId);
        document.getElementById("name").value = simulator.name;
        document.getElementById("ip").value = simulator.ip;
        Session.set('selectedSimulator', simulatorId);
    }
});