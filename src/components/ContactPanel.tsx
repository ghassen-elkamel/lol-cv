import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface ContactPanelProps {
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

export const ContactPanel = ({ contact }: ContactPanelProps) => {
  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Send Message',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: '#4A9FD8',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'View Profile',
      value: 'GitHub',
      href: contact.github,
      color: '#8B5FBF',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'Spectate Career',
      value: 'LinkedIn',
      href: contact.linkedin,
      color: '#0BC5EA',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: contact.location,
      href: '#',
      color: '#C8AA6E',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card-bg/50 to-dark-bg">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ADD TO FRIENDS LIST</h2>
          <p className="text-text-secondary text-lg">
            Let's connect and build something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="hextech-border p-8 md:p-12 rounded-lg bg-card-bg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-6 rounded-lg border-2 bg-dark-bg transition-all duration-300"
                style={{
                  borderColor: `${link.color}40`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: `${link.color}20`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-text-secondary text-sm mb-1">
                      {link.label}
                    </div>
                    <div
                      className="font-bold text-lg"
                      style={{ color: link.color }}
                    >
                      {link.value}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    boxShadow: `0 0 0px ${link.color}`,
                  }}
                  whileHover={{
                    boxShadow: `0 0 30px ${link.color}40`,
                  }}
                />
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="pt-8 border-t border-border"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-hextech-blue to-gold text-dark-bg font-bold text-xl rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(11, 197, 234, 0.3)',
              }}
            >
              <a href={`mailto:${contact.email}`} className="block">
                SEND FRIEND REQUEST
              </a>
            </motion.button>

            <p className="text-center text-text-secondary text-sm mt-6">
              Available for freelance projects and full-time opportunities
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
