
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // In a real app, this would send the form data to a backend
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Feel free to contact me for any work or suggestions below. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="p-3 bg-purple/10 rounded-lg">
                    <Mail className="text-purple" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-600">vikasini@example.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="p-3 bg-purple/10 rounded-lg">
                    <Phone className="text-purple" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="p-3 bg-purple/10 rounded-lg">
                    <MapPin className="text-purple" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                  <Input id="subject" placeholder="Subject" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your Message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full btn-primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
