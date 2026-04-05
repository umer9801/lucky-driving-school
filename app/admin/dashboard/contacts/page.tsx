'use client'

import { useState, useEffect } from 'react'
import { getContacts, updateContact, deleteContact, exportToCSV, Contact } from '@/lib/admin-storage'
import { Search, Trash2, Mail, Download, Filter, Eye, EyeOff } from 'lucide-react'

function ContactsTable() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setContacts(getContacts())
  }, [])

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || contact.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const handleMarkAsRead = (id: string) => {
    updateContact(id, { status: 'read' })
    setContacts(getContacts())
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      deleteContact(id)
      setContacts(getContacts())
      setShowModal(false)
    }
  }

  const handleExport = () => {
    exportToCSV(filteredContacts, 'contacts.csv')
  }

  const handleViewDetails = (contact: Contact) => {
    handleMarkAsRead(contact.id)
    setSelectedContact(contact)
    setShowModal(true)
  }

  const getStatusColor = (status: Contact['status']) => {
    const colors = {
      unread: 'bg-red-100 text-red-800 font-bold',
      read: 'bg-yellow-100 text-yellow-800',
      replied: 'bg-green-100 text-green-800',
    }
    return colors[status]
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="animate-slide-down">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Contact Messages</h1>
        <p className="text-gray-600">Manage and respond to contact form submissions</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary appearance-none bg-white transition-colors"
            >
              <option value="all">All Status</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </div>

        {/* Stats & Export */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">
              Showing <span className="font-bold text-foreground">{filteredContacts.length}</span> of{' '}
              <span className="font-bold text-foreground">{contacts.length}</span> contacts
            </p>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up" style={{ animationDelay: '100ms' }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">From</th>
                <th className="px-6 py-4 text-left font-semibold">Subject</th>
                <th className="px-6 py-4 text-left font-semibold">Email</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors animate-fade-in ${contact.status === 'unread' ? 'bg-blue-50' : ''}`}
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <td className="px-6 py-4">
                      <p className={`font-semibold ${contact.status === 'unread' ? 'text-primary' : 'text-foreground'}`}>
                        {contact.fullName}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-foreground">{contact.subject}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-600 truncate">{contact.email}</td>
                    <td className="px-6 py-4 text-gray-600">{new Date(contact.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(contact.status)}`}>
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewDetails(contact)}
                          className="p-2 text-primary hover:bg-blue-50 rounded-lg transition-colors transform hover:scale-110 active:scale-95"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors transform hover:scale-110 active:scale-95"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <p className="text-gray-500">No contacts found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-blue-600 text-white p-6 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold">Contact Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:opacity-80 transition-opacity"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* From */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                <p className="text-foreground font-medium">{selectedContact.fullName}</p>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <a href={`mailto:${selectedContact.email}`} className="text-primary hover:underline">
                    {selectedContact.email}
                  </a>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <p className="text-foreground">{selectedContact.subject}</p>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <div className="bg-gray-50 rounded-lg p-4 text-foreground whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500">
                Received on {new Date(selectedContact.createdAt).toLocaleString()}
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <a
                  href={`mailto:${selectedContact.email}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold"
                >
                  <Mail size={18} />
                  Reply via Email
                </a>
                <button
                  onClick={() => handleDelete(selectedContact.id)}
                  className="flex-1 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactsTable
