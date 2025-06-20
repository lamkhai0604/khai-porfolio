import { Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = () => toast('Message sent successfully!');
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {
      notify();
      event.target.reset();
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <section id="contact" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 mb-12 max-w-2xl text-center">
          I'm always open to discussing new projects and ideas. If you'd like to
          get in touch, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
            {/* Mail */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <h4 className="text-lg font-semibold">Email</h4>
                <a
                  href="mailto:lamkhai0604@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  lamkhai0604@gmail.com
                </a>
              </div>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Linkedin className="text-primary h-6 w-6" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <h4 className="text-lg font-semibold">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/khailam0604/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  khailam0604
                </a>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <h4 className="text-lg font-semibold">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Seattle, WA
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-xs">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                  placeholder="Enter your email"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="border-input bg-background focus:ring-primary block w-full resize-none rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                  rows="4"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                aria-label="Send Message"
                className={cn(
                  'cosmic-button w-full cursor-pointer',
                  'flex items-center justify-center gap-2',
                  'px-6 py-3 text-lg font-semibold',
                  'transition-colors duration-300',
                  'hover:bg-primary/90 focus:bg-primary/90',
                  'focus:ring-primary/50 focus:ring-2 focus:outline-none'
                )}
              >
                <Send size={16} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={false}
              theme="colored"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
