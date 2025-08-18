import { supabase } from './supabaseClient'

export async function addInvitation(fullName, answer, specialMessage) {
  const { data, error } = await supabase
    .from('Invitations')
    .insert([
      {
        Full_Name: fullName,
        Answer: answer,
        Special_Message: specialMessage,
      }
    ])

  if (error) throw new Error(error.message)
  return data
}
