import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceCreateArgs>({
  invoice: {
    one: {
      data: {
        dueDate: '2022-01-22T19:51:31Z',
        updatedAt: '2022-01-22T19:51:31Z',
        contact: {
          create: {
            updatedAt: '2022-01-22T19:51:31Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String326391',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:51:31Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        dueDate: '2022-01-22T19:51:31Z',
        updatedAt: '2022-01-22T19:51:31Z',
        contact: {
          create: {
            updatedAt: '2022-01-22T19:51:31Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8830714',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:51:31Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
