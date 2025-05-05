import React, { useState } from 'react';
import { ContactMessage } from '@/api/entities';
import { AlertCircle, Check } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'שדה חובה';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'שדה חובה';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'שדה חובה';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      await ContactMessage.create(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage('אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-2">תודה על פנייתך!</h3>
          <p className="text-navy-700 max-w-md">
            ההודעה שלך התקבלה בהצלחה. צוות המשרד יחזור אליך בהקדם האפשרי.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2 bg-navy-100 hover:bg-navy-200 text-navy-800 rounded-lg transition-colors"
          >
            שליחת הודעה נוספת
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 mt-0.5 ml-2 flex-shrink-0" />
              <div>{errorMessage}</div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-navy-800 font-medium mb-2">שם מלא *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-navy-800 font-medium mb-2">אימייל *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-navy-800 font-medium mb-2">טלפון</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-navy-800 font-medium mb-2">נושא</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-navy-800 font-medium mb-2">הודעה *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <div className="text-left">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'שולח...' : 'שליחה'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}