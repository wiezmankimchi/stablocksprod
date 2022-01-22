import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceItemCreateArgs>({
  invoiceItem: {
    one: {
      data: {
        name: 'String',
        units: 4355532,
        rate: 7810255,
        updatedAt: '2022-01-22T19:45:34Z',
        invoice: {
          create: {
            dueDate: '2022-01-22T19:45:34Z',
            updatedAt: '2022-01-22T19:45:34Z',
            contact: {
              create: {
                updatedAt: '2022-01-22T19:45:34Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String8276252',
                    otherEmails: 'String',
                    updatedAt: '2022-01-22T19:45:34Z',
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
        units: 1196768,
        rate: 4605874,
        updatedAt: '2022-01-22T19:45:34Z',
        invoice: {
          create: {
            dueDate: '2022-01-22T19:45:34Z',
            updatedAt: '2022-01-22T19:45:34Z',
            contact: {
              create: {
                updatedAt: '2022-01-22T19:45:34Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String5150958',
                    otherEmails: 'String',
                    updatedAt: '2022-01-22T19:45:34Z',
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
