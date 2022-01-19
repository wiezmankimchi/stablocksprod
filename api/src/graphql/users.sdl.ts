export const schema = gql`
  type User {
    id: String!
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    otherEmails: [String]
    profileImage: String
    userTypes: [UserType]!
    roles: Role
    position: String
    departments: [Department]!
    supervisorId: String
    supervisor: User
    employees: [User]!
    amount: Int
    payType: EmployeePayType
    jobs: [Job]!
    applications: [Application]!
    resume: String
    contacts: [Contact]!
    contactNotes: [ContactNote]!
    companies: [Company]!
    ticketsCreated: [Ticket]!
    ticketsAssigned: [Ticket]!
    ticketComments: [TicketComment]!
    projects: [Project]!
    tasksCreated: [Task]!
    tasksAssigned: [Task]!
    taskComments: [TaskComment]!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  enum UserType {
    admin
    employee
    contact
    applicant
  }
  enum EmployeePayType {
    salary
    hourly
    contract
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
    employees: [User!]! @requireAuth
  }

  input CreateUserInput {
    firstName: String!
    middleName: String
    lastName: String!
    email: String!
    otherEmails: [String]
    profileImage: String
    userTypes: [UserType]!
    position: String
    supervisorId: String
    amount: Int
    payType: EmployeePayType
    resume: String
  }

  input UpdateUserInput {
    firstName: String
    middleName: String
    lastName: String
    email: String
    otherEmails: [String]
    profileImage: String
    userTypes: [UserType]
    position: String
    supervisorId: String
    amount: Int
    payType: EmployeePayType
    resume: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
