import { db } from 'src/lib/db'

type SearchResult = {
  id: string
  title: string
  type: string
}

const queryOptions = [
  {
    id: 'company',
    fields: ['id', 'firstName', 'lastName', 'email'],
    title: ['firstName', 'lastName'],
  },
  { id: 'contact', fields: ['id', 'name', 'website'], title: ['name'] },
  { id: 'department', fields: ['id', 'name', 'email'], title: ['name'] },
  {
    id: 'employee',
    type: 'user',
    fields: ['id', 'firstName', 'lastName', 'email'],
    title: ['firstName', 'lastName'],
    extraFilters: {
      roles: {
        OR: [
          {
            admin: true,
          },
          {
            employee: true,
          },
        ],
      },
    },
  },
  { id: 'expense', fields: ['id', 'name'], title: ['name'] },
  { id: 'income', fields: ['id', 'name'], title: ['name'] },
  { id: 'job', fields: ['id', 'title', 'description'], title: ['title'] },
  { id: 'project', fields: ['id', 'title', 'description'], title: ['title'] },
  { id: 'task', fields: ['id', 'title', 'description'], title: ['title'] },
  { id: 'ticket', fields: ['id', 'title', 'description'], title: ['title'] },
]

export const search = async ({
  type,
  query,
}: {
  type: string
  query: string
}) => {
  const results: SearchResult[] = []
  const OR = []

  const theQuery = query.toLocaleLowerCase()

  const foundOption = queryOptions.find((option) => option.id === type)

  if (!foundOption) return []

  foundOption.fields.forEach((field) => {
    const newFilter = {}
    newFilter[field] = { contains: theQuery, mode: 'insensitive' }
    OR.push(newFilter)
  })

  const entries = await db[foundOption.type || type].findMany({
    where: {
      OR,
      ...foundOption?.extraFilters,
    },
  })

  entries.forEach((entry) => {
    const titleElements = []

    foundOption.title.forEach((element) => {
      titleElements.push(entry[element])
    })

    const title = titleElements.join(' ')

    results.push({
      id: entry.id,
      title,
      type,
    })
  })

  results.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0))

  return results
}
