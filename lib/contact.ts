import { supabase } from './supabase'

export type ContactData = {
  firstName: string
  lastName:  string
  email:     string
  subject:   string
  message:   string
}

export async function createContactMessage(data: ContactData) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([
      {
        first_name: data.firstName,
        last_name:  data.lastName,
        email:      data.email,
        subject:    data.subject,
        message:    data.message,
      },
    ])

  if (error) {
    console.error('Error saving message:', error)
    throw error
  }

  return true
}