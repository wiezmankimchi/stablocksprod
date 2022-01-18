export const schema = gql`
  type Organization {
    id: String!
    name: String!
    website: String
    logo: String
    recruiting: Boolean
    crm: Boolean
    helpdesk: Boolean
    projects: Boolean
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    organizations: [Organization!]! @requireAuth
    organization: Organization @requireAuth
  }

  input CreateOrganizationInput {
    name: String!
    website: String
    logo: String
    recruiting: Boolean
    crm: Boolean
    helpdesk: Boolean
    projects: Boolean
  }

  input UpdateOrganizationInput {
    name: String
    website: String
    logo: String
    recruiting: Boolean
    crm: Boolean
    helpdesk: Boolean
    projects: Boolean
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization! @skipAuth
    updateOrganization(input: UpdateOrganizationInput!): Organization!
      @requireAuth
    # deleteOrganization(id: String!): Organization! @requireAuth
  }
`
