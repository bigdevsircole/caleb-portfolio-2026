'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: object) => void;
  }
}

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const whatsappUrl = "https://wa.me/2348180402086";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Caleb',
        },
        publicKey
      );

      setLoading(false);
      setStatus('success');
      
      // Track event in Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submission', {
          'event_category': 'Contact',
          'event_label': 'Success',
          'value': 1
        });
      }

      toast({
        title: "Message Sent!",
        description: "Your message has been delivered. I'll get back to you soon.",
      });
      
      // Optional: Redirect to WhatsApp after a short delay if needed, 
      // but usually email is enough. Letting user decide if they want both.
      // For now, let's just stay on success state.
      
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 1000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setLoading(false);
      setStatus('error');
      
      toast({
        title: "Error Sending Message",
        description: "There was a problem delivering your message. Please try again or use WhatsApp.",
        variant: "destructive"
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 p-12 md:p-24 bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] border border-white/10 flex flex-col items-center gap-12 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="text-center space-y-4 max-w-3xl">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
          Ready to start your next <span className="text-primary italic">digital</span> chapter?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          I'm currently accepting new projects and consulting inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest opacity-80">Quick Connect</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              If you need an immediate response or want to discuss a time-sensitive project, WhatsApp is my fastest channel.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <Button size="lg" className="rounded-2xl bg-white text-black hover:bg-white/90 h-20 px-12 text-xl font-bold gap-4 transition-all hover:scale-[1.02]" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-6 h-6 fill-black" /> Chat via WhatsApp
              </a>
            </Button>
            <p className="text-xs text-center text-muted-foreground uppercase tracking-widest font-bold opacity-40">Typically replies in under 2 minutes</p>
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 ml-1">Full Name</label>
              <Input 
                required
                disabled={loading}
                placeholder="How should I address you?"
                className="h-16 bg-white/5 border-white/10 rounded-2xl focus:ring-primary/40 text-white placeholder:text-white/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 ml-1">Input Your Email</label>
              <Input 
                required
                disabled={loading}
                type="email"
                placeholder="Where should I send my reply?"
                className="h-16 bg-white/5 border-white/10 rounded-2xl focus:ring-primary/40 text-white placeholder:text-white/20"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 ml-1">Project Brief</label>
              <Textarea 
                required
                disabled={loading}
                placeholder="Tell me about your goals, timeline, and budget..."
                className="min-h-[180px] bg-white/5 border-white/10 rounded-2xl focus:ring-primary/40 resize-none text-white placeholder:text-white/20 p-6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <Button 
              type="submit"
              disabled={loading}
              className={`w-full h-20 rounded-2xl text-xl font-bold gap-3 transition-all ${
                status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div key="loading" className="flex items-center gap-2">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processing...
                  </motion.div>
                ) : status === 'success' ? (
                  <motion.div key="success" className="flex items-center gap-2">
                    Sent Successfully
                  </motion.div>
                ) : (
                  <motion.div key="idle" className="flex items-center gap-2">
                    Send Inquiry
                    <Send className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </form>

          {/* Decorative background glow for the form */}
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10 opacity-30" />
        </div>
      </div>
    </motion.div>
  );
}
