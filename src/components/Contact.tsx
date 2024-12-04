import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect, useRef } from 'react';

export function Contact() {
  const [state, handleSubmit] = useForm("mwpkyrpr");
  const [buttonText, setButtonText] = useState("Send Message");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      setButtonText("Submitted");
      clearForm();

      const timer = setTimeout(() => {
        setButtonText("Send Message");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const clearForm = () => {
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-amber-600 mr-4" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">Polytechnic Rd, Near NCC Office, Sant Nagar, Saharsa, Bihar 852201</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-amber-600 mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(+91) 94720 27177</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-amber-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">todaysbakery@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              type="number"
              name="number"
              placeholder="Mobile Number"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
              required
            />
            <ValidationError prefix="Number" field="number" errors={state.errors} />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              className={`bg-amber-600 text-white px-6 py-3 rounded transition w-full ${
                state.submitting || buttonText === "Submitted" ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-700"
              }`}
              disabled={state.submitting || buttonText === "Submitted"}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
