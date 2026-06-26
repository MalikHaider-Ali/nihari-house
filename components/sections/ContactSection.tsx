'use client'
import { useState } from 'react'
import { createContactMessage } from '@/lib/contact'

export default function ContactSection() {
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [subject,   setSubject]   = useState('General Inquiry')
  const [message,   setMessage]   = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createContactMessage({
        firstName,
        lastName,
        email,
        subject,
        message,
      })
      setLoading(false)
      setSubmitted(true)
    } catch (error) {
      console.error('Message failed:', error)
      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-12">
          <header>
            <h2
              className="text-4xl text-[#6B1E2E] font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get In Touch
            </h2>
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Lora, serif' }}
            >
              We would love to hear from you. Visit us or reach out through
              any of these channels.
            </p>
          </header>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3
                className="text-[#6B1E2E] font-bold uppercase tracking-wider text-sm mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Location
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Main Saddar Road,<br />
                Near Cantonment Board,<br />
                Rawalpindi, Pakistan
              </p>
            </div>
            <div>
              <h3
                className="text-[#6B1E2E] font-bold uppercase tracking-wider text-sm mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Contact
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Phone: +92 51 555 1234
              </p>
              <p
                className="text-gray-700"
                style={{ fontFamily: 'Lora, serif' }}
              >
                WhatsApp: +92 300 123 4567
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <h3
              className="text-[#6B1E2E] font-bold mb-4 flex items-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="mr-2">🕒</span> Opening Hours
            </h3>
            <table
              className="w-full text-sm text-gray-700"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <tbody>
                {[
                  { day: 'Monday – Thursday', hours: '8:00 AM – 11:00 PM' },
                  { day: 'Friday – Saturday', hours: '8:00 AM – 12:00 AM' },
                  { day: 'Sunday',            hours: '8:00 AM – 11:00 PM' },
                ].map((row, i, arr) => (
                  <tr
                    key={row.day}
                    className={i < arr.length - 1 ? 'border-b border-gray-50' : ''}
                  >
                    <td className="py-2 font-medium">{row.day}</td>
                    <td className="py-2 text-right">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-md"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Prefer to chat? Message us directly
          </a>

          {/* Map */}
          <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.083!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951b8a3ae847!2sRawalpindi!5e0!3m2!1sen!2s!4v1625123456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="bg-[#6B1E2E] p-8 md:p-12 rounded-lg shadow-2xl">
          <h3
            className="text-3xl text-white font-bold mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Send a Message
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Message Sent!
              </h4>
              <p
                className="text-white/70"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Thank you! We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-white/80 text-sm mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Muhammad"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-[#FFFFF0] border-transparent rounded-md py-3 px-4 text-[#6B1E2E] focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>
                <div>
                  <label
                    className="block text-white/80 text-sm mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ali"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-[#FFFFF0] border-transparent rounded-md py-3 px-4 text-[#6B1E2E] focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-white/80 text-sm mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="muhammad@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#FFFFF0] border-transparent rounded-md py-3 px-4 text-[#6B1E2E] focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  className="block text-white/80 text-sm mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#FFFFF0] border-transparent rounded-md py-3 px-4 text-[#6B1E2E] focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <option>General Inquiry</option>
                  <option>Reservation</option>
                  <option>Catering</option>
                  <option>Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-white/80 text-sm mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-[#FFFFF0] border-transparent rounded-md py-3 px-4 text-[#6B1E2E] focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D4870A] hover:bg-[#F5C842] text-white font-bold py-4 rounded-md transition duration-300 uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  )
}