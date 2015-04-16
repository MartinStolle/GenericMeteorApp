simulators = new Mongo.Collection('simulators');
statuses = new Mongo.Collection('statuses');

Mesosphere({
	name: 'simulatorform',
	method: 'insert',
	template: 'simulatorform',
    fields: {
        name: {
            required: true,
            message: "letters or numbers, between 3 and 20 characters.",
            format: /^[A-Z0-9]{3,20}$/i
        },
        hostname: {
            required: true,
            message: "Hostname required",
            transform: ["toUpperCase"]
        },
        ip: {
            required: true,
            message: "Not a valid IP address",
            format: "ipv4"
        },
    },
	onFailure: function(erroredFields, formHandle){
		//custom code here
		Mesosphere.Utils.failureCallback(erroredFields, formHandle);
	},
	onSuccess: function(formData, formHandle){
		//custom code here
		Mesosphere.Utils.successCallback(formData, formHandle);
	}
});

Meteor.methods({
	insert:function(rawFormData, templateData){
		Mesosphere.simulatorform.validate(rawFormData, function(errors, formFieldsObject){
			if(!errors) {
				//Do what we need to do here;
				console.log("No Errors Found");
			}
		});
	}
});