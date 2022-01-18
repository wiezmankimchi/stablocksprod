import { supabaseClient as supabase } from 'src/App'

export async function checkForBucket(bucketName: string): Promise<boolean> {
  const { data, error } = await supabase.storage.getBucket(bucketName)

  console.log(data)
  console.log(error)

  return false
}

export async function findOrCreateBucket(bucketName: string) {
  const { data, error } = await supabase.storage.getBucket(bucketName)

  if (error) {
    const { data, error } = await supabase.storage.createBucket(bucketName, {
      public: true,
    })

    return data || error
  }

  return data
}
