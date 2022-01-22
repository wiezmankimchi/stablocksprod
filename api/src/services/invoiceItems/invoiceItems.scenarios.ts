import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceItemCreateArgs>({
  invoiceItem: {
    one: {
      data: {
        name: 'String',
        units: 3381755,
        rate: 7972367,
        updatedAt: '2022-01-22T19:51:38Z',
        invoice: {
          create: {
            dueDate: '2022-01-22T19:51:38Z',
            updatedAt: '2022-01-22T19:51:38Z',
            contact: {
              create: {
                updatedAt: '2022-01-22T19:51:38Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String3706205',
                    otherEmails: 'String',
                    updatedAt: '2022-01-22T19:51:38Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        units: 107919,
        rate: 9706486,
        updatedAt: '2022-01-22T19:51:38Z',
        invoice: {
          create: {
            dueDate: '2022-01-22T19:51:38Z',
            updatedAt: '2022-01-22T19:51:38Z',
            contact: {
              create: {
                updatedAt: '2022-01-22T19:51:38Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String788723',
                    otherEmails: 'String',
                    updatedAt: '2022-01-22T19:51:38Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
