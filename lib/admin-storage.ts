// Types for bookings and contacts
export interface Booking {
  id: string
  courseId: string
  courseName: string
  fullName: string
  email: string
  phone: string
  experience: string
  preferredDate: string
  preferredTime: string
  licenseStatus: string
  message?: string
  createdAt: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

export interface Contact {
  id: string
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
  status: 'unread' | 'read' | 'replied'
}

// Storage keys
const BOOKINGS_KEY = 'lucky_driving_bookings'
const CONTACTS_KEY = 'lucky_driving_contacts'
const ADMIN_SESSION_KEY = 'admin_session'

// Initialize storage if empty
export const initializeStorage = () => {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem(BOOKINGS_KEY)) {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify([]))
    }
    if (!localStorage.getItem(CONTACTS_KEY)) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify([]))
    }
  }
}

// Booking operations
export const getBookings = (): Booking[] => {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(BOOKINGS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error reading bookings:', error)
    return []
  }
}

export const addBooking = (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
  const newBooking: Booking = {
    ...booking,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  }
  
  if (typeof window !== 'undefined') {
    const bookings = getBookings()
    bookings.push(newBooking)
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
  }
  
  return newBooking
}

export const updateBooking = (id: string, updates: Partial<Booking>): Booking | null => {
  if (typeof window === 'undefined') return null
  
  const bookings = getBookings()
  const index = bookings.findIndex(b => b.id === id)
  
  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updates }
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
    return bookings[index]
  }
  
  return null
}

export const deleteBooking = (id: string): boolean => {
  if (typeof window === 'undefined') return false
  
  const bookings = getBookings()
  const filtered = bookings.filter(b => b.id !== id)
  
  if (filtered.length !== bookings.length) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(filtered))
    return true
  }
  
  return false
}

// Contact operations
export const getContacts = (): Contact[] => {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(CONTACTS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error reading contacts:', error)
    return []
  }
}

export const addContact = (contact: Omit<Contact, 'id' | 'createdAt' | 'status'>): Contact => {
  const newContact: Contact = {
    ...contact,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'unread'
  }
  
  if (typeof window !== 'undefined') {
    const contacts = getContacts()
    contacts.push(newContact)
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
  }
  
  return newContact
}

export const updateContact = (id: string, updates: Partial<Contact>): Contact | null => {
  if (typeof window === 'undefined') return null
  
  const contacts = getContacts()
  const index = contacts.findIndex(c => c.id === id)
  
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updates }
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
    return contacts[index]
  }
  
  return null
}

export const deleteContact = (id: string): boolean => {
  if (typeof window === 'undefined') return false
  
  const contacts = getContacts()
  const filtered = contacts.filter(c => c.id !== id)
  
  if (filtered.length !== contacts.length) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(filtered))
    return true
  }
  
  return false
}

// Admin session
export const setAdminSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({
      isLoggedIn: true,
      loginTime: new Date().toISOString()
    }))
  }
}

export const getAdminSession = () => {
  if (typeof window === 'undefined') return null
  try {
    const data = localStorage.getItem(ADMIN_SESSION_KEY)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

export const clearAdminSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ADMIN_SESSION_KEY)
  }
}

// Export utilities
export const exportToCSV = (data: any[], filename: string) => {
  const csv = [
    Object.keys(data[0]).join(','),
    ...data.map(item => Object.values(item).map(v => `"${v}"`).join(','))
  ].join('\n')

  const blob = new Blob([csv], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  window.URL.revokeObjectURL(url)
}
