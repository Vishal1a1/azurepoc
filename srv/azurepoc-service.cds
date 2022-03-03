@impl:'./azurepoc-service.js'
@cds.query.limit: 100
service MSGraphService @(requires:'any'){
  @cds.persistence.skip
  entity User {
    key aad_id                 : String;
        username               : String;
        displayName            : String;
        givenName              : String;
        surname                : String;
        isAzureActiveDirectory : Boolean;
  }
}