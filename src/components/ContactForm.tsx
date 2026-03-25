'use client';

import { useState } from 'react';
import { useFirestore } from '@/firebase/provider';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { sendContactEmailNotification } from '@/app/actions/contact';

export function ContactForm() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const whatsappUrl = "https://wa.me/2348180402086";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    setLoading(true);

    const messageData = {
      ...formData,
      createdAt: serverTimestamp(),
    };

    const messagesRef = collection(firestore, 'messages');

    addDoc(messagesRef, messageData)
      .then(async () => {
        const emailResult = await sendContactEmailNotification(formData);

        if (emailResult.success) {
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out! Caleb has been notified.",
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast({
            variant: "destructive",
            title: "Database saved, but email failed",
            description: `Message is in your database, but the email notification failed.`,
          });
        }
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: messagesRef.path,
          operation: 'create',
          requestResourceData: messageData,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0.8, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 p-12 md:p-24 bg-white/5 rounded-[2.5rem] border border-white/10 flex flex-col items-center gap-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl mx-auto text-white">
          Let's create something extraordinary together.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Send a direct message below or reach out via my preferred channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Direct Channel</h3>
            <p className="text-muted-foreground">Prefer instant messaging? I'm most active on WhatsApp.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-12 text-lg gap-3 flex-1 md:flex-none" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 shadow-2xl">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
            <Input 
              required
              disabled={loading}
              placeholder="Your name"
              className="h-14 bg-white/5 border-white/10 rounded-xl focus:ring-white/20 text-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
            <Input 
              required
              disabled={loading}
              type="email"
              placeholder="your@email.com"
              className="h-14 bg-white/5 border-white/10 rounded-xl focus:ring-white/20 text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
            <Textarea 
              required
              disabled={loading}
              placeholder="Tell me about your project..."
              className="min-h-[150px] bg-white/5 border-white/10 rounded-xl focus:ring-white/20 resize-none text-white"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <Button 
            disabled={loading}
            className="w-full h-16 rounded-xl bg-white text-black hover:bg-white/90 text-lg font-bold gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
