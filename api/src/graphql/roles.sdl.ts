export const schema = gql`
  type Role {
    id: String!
    user: User!
    userId: String!
    admin: Boolean!
    employee: Boolean!
    external: Boolean!
    departmentAdmin: Boolean!
    financeAdmin: Boolean!
    finance: Boolean!
    hrAdmin: Boolean!
    hr: Boolean!
    recruitingAdmin: Boolean!
    recruiting: Boolean!
    crmAdmin: Boolean!
    crm: Boolean!
    marketingAdmin: Boolean!
    marketing: Boolean!
    salesAdmin: Boolean!
    sales: Boolean!
    helpdeskAdmin: Boolean!
    helpdesk: Boolean!
    projectsAdmin: Boolean!
    projects: Boolean!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    roles: [Role!]! @requireAuth
    role(id: String!): Role @requireAuth
  }

  input CreateRoleInput {
    userId: String!
    admin: Boolean!
    employee: Boolean!
    external: Boolean!
    departmentAdmin: Boolean!
    financeAdmin: Boolean!
    finance: Boolean!
    hrAdmin: Boolean!
    hr: Boolean!
    recruitingAdmin: Boolean!
    recruiting: Boolean!
    crmAdmin: Boolean!
    crm: Boolean!
    marketingAdmin: Boolean!
    marketing: Boolean!
    salesAdmin: Boolean!
    sales: Boolean!
    helpdeskAdmin: Boolean!
    helpdesk: Boolean!
    projectsAdmin: Boolean!
    projects: Boolean!
  }

  input UpdateRoleInput {
    userId: String
    admin: Boolean
    employee: Boolean
    external: Boolean
    departmentAdmin: Boolean
    financeAdmin: Boolean
    finance: Boolean
    hrAdmin: Boolean
    hr: Boolean
    recruitingAdmin: Boolean
    recruiting: Boolean
    crmAdmin: Boolean
    crm: Boolean
    marketingAdmin: Boolean
    marketing: Boolean
    salesAdmin: Boolean
    sales: Boolean
    helpdeskAdmin: Boolean
    helpdesk: Boolean
    projectsAdmin: Boolean
    projects: Boolean
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role! @requireAuth
    updateRole(id: String!, input: UpdateRoleInput!): Role! @requireAuth
    # deleteRole(id: String!): Role! @requireAuth
  }
`
