simulators = new Mongo.Collection("simulators");
statuses = new Mongo.Collection("statuses");

Mesosphere({
    name:"simulatorform",
    template:"simulatorform",
    fields:{
        name:{
            required:true,
            message:"letters or numbers, between 3 and 20 characters.",
            format:/^[A-Z0-9]{3,20}$/i
        },
        hostname:{
            required:true,
            message:"Hostname required",
            transform:["toUpperCase "]
        },
        ip:{
            required:true,
            message:"Not a valid IP address",
            format:"ipv4 "
        },
    },
	onFailure: function(errorFields, formHandle){
    	console.log("error");
    },
	onSuccess: function(formData, formHandle){
		console.log("success");
	} 
});