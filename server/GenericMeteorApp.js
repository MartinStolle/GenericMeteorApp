Meteor.publish('Simulators', function() {
    return simulators.find({});
});

Meteor.publish('Statuses', function() {
    return statuses.find({});
});

// Methods execute on the server after being triggered from the client
Meteor.methods({
    'insertSimulator': function(name, hostname, ip, status) {
        simulators.insert({
            name: name,
            hostname: hostname,
            ip: ip,
            status: status
        });
    },
    'removeSimulator': function(id) {
        simulators.remove(id);
    },
    'modifySimulator': function(selectedSimulator, name, hostname, ip, status) {
        simulators.update(selectedSimulator, {
            $set: {
                name: name,
                hostname: hostname,
                ip: ip,
                status: status
            }
        });
    },
    signupUser: function(rawFormData, templateData) {
        Mesosphere.loginForm.validate(rawFormData, function(errors, formFieldsObject) {
            if (!errors) {
                //Do what we need to do here;
            }
        });
    }
});

// if the database is empty on server start, create some sample data.
Meteor.startup(function() {
    if (statuses.find().count() === 0) {
        var data = [{
            name: "Available"
        }, {
            name: "Not available"
        }, {
            name: "Maintenance"
        }];
        _.each(data, function(list) {
            statuses.insert({
                name: list.name
            });
        });
    }
});
