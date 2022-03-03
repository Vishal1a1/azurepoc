const cdsapi = require("@sapmentors/cds-scp-api");

const readFunction = async () => {
 let destination = 'MicrosoftGraph'

  const url = `/v1.0/users/`
  const service = await cdsapi.connect.to(destination);
  const graphUser = await service.run({
    url: url
  })

  let users = graphUser.value.map(graph_user => {
    var user = {}
    user.aad_id = graph_user.id
    user.username = graph_user.userPrincipalName
    user.displayName = graph_user.displayName
    user.givenName = graph_user.givenName
    user.surname = graph_user.surname
    user.isAzureActiveDirectory = true
    return user
  })
  return users
}
module.exports = (srv) => {
  srv.on('READ', 'User', readFunction)
}