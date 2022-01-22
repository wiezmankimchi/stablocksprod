import { db } from 'src/lib/db'

export const appProvider = async () => {
  const organization = await db.organization.findFirst()
  const userCount = await db.user.count()

  return {
    organization,
    userCount,
  }
}
