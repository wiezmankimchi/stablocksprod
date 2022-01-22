import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceCreateArgs>({
  invoice: {
    one: {
      data: {
        dueDate: '2022-01-22T19:45:26Z',
        updatedAt: '2022-01-22T19:45:26Z',
        contact: {
          create: {
            updatedAt: '2022-01-22T19:45:26Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String261137',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:45:26Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        dueDate: '2022-01-22T19:45:26Z',
        updatedAt: '2022-01-22T19:45:26Z',
        contact: {
          create: {
            updatedAt: '2022-01-22T19:45:26Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String9781987',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:45:26Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
