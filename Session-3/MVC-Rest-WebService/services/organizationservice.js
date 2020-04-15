const Organization = require('../models/organization');

class OrganizationService{
   constructor( ){

   }

   createOrganization(obj){
        const organization = new  Organization();

        organization.name = org['name'];
        organization.path = org['path'];
        return organization.save();
    }

    getOrganizationByPath(path) {
        return Organization.find({"path":path});
    
    }
}
const organizationService =  new OrganizationService();

module.exports = organizationService;