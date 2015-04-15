Meteor.subscribe('Simulators');
Meteor.subscribe('Statuses');

Template.simulatortable.helpers({
    simulators: function () {
        return simulators.find({});
    }
});

Template.simulatorform.helpers({
    statuses: function () {
        return statuses.find({});
    },
    'selectedStatus': function(){
		var status = statuses.findOne(this._id);
		if (status == undefined) {
			return "";
		}
		var selectedSimulator = Session.get('selectedSimulator');
		var simulator = simulators.findOne(selectedSimulator);
		if (simulator == undefined) {
			return "";
		}
        if (simulator.status == status.name) {
            return "selected";
        }
    }
});

Template.simulatorrow.helpers({
    'selectedClass': function(){
        var simulatorId = this._id;
        var selectedSimulator = Session.get('selectedSimulator');
        // Do these IDs match?
        if (simulatorId == selectedSimulator) {
            // Return a CSS class
            return "success";
        }
    }
});

Template.body.events({
/*    "click #add": function (event) {
        // Prevent the browser from applying default behaviour to the form
        event.preventDefault();
		var validationObject = Mesosphere.loginForm.validate(rawFormData);
        var name = document.getElementById("name").value;
        var hostname = document.getElementById("hostname").value;
        var ip = document.getElementById("ip").value;
        var status = document.getElementById("status").value;

        Meteor.call('insertSimulator', name, hostname, ip, status);

        document.getElementById("name").value = "";
        document.getElementById("ip").value = "";
        document.getElementById("hostname").value = "";
        return false;
    },*/
    "click #edit": function () {
        event.preventDefault();
        var selectedSimulator = Session.get('selectedSimulator');
        var name = document.getElementById("name").value;
        var hostname = document.getElementById("hostname").value;
        var ip = document.getElementById("ip").value;
        var status = document.getElementById("status").value;
        Meteor.call('modifySimulator', selectedSimulator, name, hostname, ip, status);
    },
    "click #delete": function () {
        // Prevent the browser from applying default behaviour to the form
        event.preventDefault();
        Meteor.call('removeSimulator', this._id);
    },
    "click td": function () {
        var simulatorId = this._id;
        var simulator = simulators.findOne(simulatorId);
        document.getElementById("name").value = simulator.name;
        document.getElementById("hostname").value = simulator.hostname;
        document.getElementById("ip").value = simulator.ip;
        Session.set('selectedSimulator', simulatorId);
    }
});