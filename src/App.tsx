import { useState, useEffect } from 'react';
import {
  Shield,
  Sparkles,
  Star,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: Shield,
    title: 'Ceramic Coating',
    georgian: 'კერამიკული დაცვა',
    desc: 'Nano-ceramic protection that bonds to your paint for years of hydrophobic shine and UV resistance.',
    price: 'From ₾450',
    highlight: true,
  },
  {
    icon: Sparkles,
    title: 'Interior Deep Cleaning',
    georgian: 'სალონის ქიმწმენდა',
    desc: 'Full interior extraction, sanitization, and conditioning — every surface, every corner.',
    price: 'From ₾120',
    highlight: false,
  },
  {
    icon: Star,
    title: 'Paint Polishing',
    georgian: 'პოლირება',
    desc: 'Machine-grade compound and polish that removes swirls, scratches, and oxidation for a mirror finish.',
    price: 'From ₾200',
    highlight: false,
  },
  {
    icon: CheckCircle,
    title: 'Premium Full Detail',
    georgian: 'სრული დეტეილინგი',
    desc: 'Our most comprehensive package: exterior wash, clay bar, polish, wax, and full interior detail.',
    price: 'From ₾350',
    highlight: false,
  },
  {
    icon: ArrowRight,
    title: 'Paint Protection Film',
    georgian: 'PPF დაფარვა',
    desc: 'Self-healing urethane film on impact zones protects against rock chips, road debris, and minor abrasions.',
    price: 'From ₾600',
    highlight: false,
  },
  {
    icon: Sparkles,
    title: 'Headlight Restoration',
    georgian: 'ფარების აღდგენა',
    desc: 'UV-damaged, yellowed headlights polished and sealed to factory clarity — safer driving, better look.',
    price: 'From ₾60',
    highlight: false,
  },
];

const GALLERY_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Luxury car ceramic coating',
  },
  {
    src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Premium car detailing',
  },
  {
    src: 'https://images.pexels.com/photos/4700401/pexels-photo-4700401.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior deep cleaning',
  },
  {
    src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Paint polishing service',
  },
  {
    src: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Luxury vehicle detailing',
  },
  {
    src: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Car wash and detail',
  },
];

const REVIEWS = [
  {
    name: 'Giorgi Beridze',
    rating: 5,
    text: 'Absolutely incredible work on my BMW. The ceramic coating looks flawless — water just beads off like nothing. Will not go anywhere else.',
    vehicle: 'BMW 5 Series',
  },
  {
    name: 'Nino Kvitashvili',
    rating: 5,
    text: 'Interior deep clean was beyond what I expected. They removed stains I thought were permanent. The car smells brand new.',
    vehicle: 'Toyota RAV4',
  },
  {
    name: 'Levan Maisuradze',
    rating: 5,
    text: 'Paint polishing removed every swirl mark from my black Mercedes. Looks like it just rolled off the showroom floor.',
    vehicle: 'Mercedes C-Class',
  },
];

const WHY_ITEMS = [
  {
    title: 'Professional-Grade Products',
    desc: 'We use only certified Gyeon, IGL, and Meguiars products — no shortcuts.',
  },
  {
    title: 'Trained Specialists',
    desc: 'Every technician is trained in machine polishing, ceramic application, and surface correction.',
  },
  {
    title: 'Guaranteed Results',
    desc: 'If you are not satisfied, we come back and fix it. No questions asked.',
  },
  {
    title: "Tbilisi's Trusted Detail Shop",
    desc: 'Hundreds of satisfied clients across Tbilisi trust us with their vehicles.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-zinc-950 text-zinc-100 font-sans antialiased">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-zinc-950/95 backdrop-blur border-b border-zinc-800 shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center shadow-lg group-hover:bg-amber-400 transition-colors">
              <Star size={16} className="fill-zinc-950 text-zinc-950" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Status<span className="text-amber-500">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold rounded transition-colors duration-200"
          >
            Get a Free Quote
          </a>

          <button
            className="md:hidden text-zinc-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-zinc-300 hover:text-white text-sm font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold rounded transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Premium car detailing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Tbilisi's Premier Detail Studio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Premium Auto Detailing
            <br />
            <span className="text-amber-500">&amp; Ceramic Coating</span>
            <br />
            <span className="text-zinc-300 text-3xl sm:text-4xl md:text-5xl">in Tbilisi</span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We treat every vehicle like our own. Professional-grade products, certified technicians,
            and results that speak for themselves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-base rounded transition-all duration-200 shadow-2xl hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              Book Your Slot
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800/80 hover:bg-zinc-700 text-white font-semibold text-base rounded border border-zinc-700 transition-all duration-200"
            >
              View Services
              <ChevronDown size={18} />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-none sm:flex sm:items-center sm:justify-center sm:gap-10">
            {[
              { value: '500+', label: 'Cars Detailed' },
              { value: '5★', label: 'Average Rating' },
              { value: '3yr', label: 'Ceramic Warranty' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-amber-500">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-amber-400 transition-colors animate-bounce"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Our Services</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From a single-stage polish to a full ceramic system — every service is performed with the same
              obsessive attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className={`relative group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  svc.highlight
                    ? 'bg-amber-500/5 border-amber-500/40 hover:border-amber-500 hover:shadow-amber-500/10'
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:shadow-zinc-900'
                }`}
              >
                {svc.highlight && (
                  <span className="absolute top-4 right-4 text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                    Most Popular
                  </span>
                )}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    svc.highlight ? 'bg-amber-500/20' : 'bg-zinc-800'
                  }`}
                >
                  <svc.icon size={20} className={svc.highlight ? 'text-amber-400' : 'text-zinc-400'} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{svc.title}</h3>
                <p className="text-zinc-500 text-xs mb-3 font-medium">{svc.georgian}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-base font-black ${svc.highlight ? 'text-amber-400' : 'text-zinc-300'}`}>
                    {svc.price}
                  </span>
                  <a
                    href="#contact"
                    className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                      svc.highlight
                        ? 'text-amber-400 hover:text-amber-300'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Book now <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-24 px-4 sm:px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
                The Status Difference
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Why Tbilisi's Car Enthusiasts Choose Us
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10">
                We are not a quick car wash. We are a dedicated detail studio where precision, product
                quality, and customer satisfaction are non-negotiable.
              </p>
              <div className="space-y-6">
                {WHY_ITEMS.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={13} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm rounded transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Free Quote <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4700401/pexels-photo-4700401.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Detailing specialist at work"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center">
                    <Shield size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">3-Year Warranty</p>
                    <p className="text-zinc-500 text-xs">On all ceramic coatings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Results That Speak
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every car that leaves our studio is a reflection of our standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl group aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-bold uppercase tracking-widest">
                    Status Detailing
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-4 sm:px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Client Reviews</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <StarRating count={5} />
              <span className="text-zinc-400 text-sm">5.0 average across 100+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1"
              >
                <StarRating count={review.rating} />
                <p className="text-zinc-300 text-sm leading-relaxed mt-4 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                  <div className="w-9 h-9 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-zinc-600 text-xs">{review.vehicle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 bg-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 mb-4 leading-tight">
            Ready to Give Your Car the Treatment It Deserves?
          </h2>
          <p className="text-zinc-800 text-lg mb-8 max-w-xl mx-auto">
            Slots are limited. Book today and get a free paint inspection with any service.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-black text-base rounded transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
          >
            Book Your Slot Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Get in Touch</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Book Your Appointment</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed">
                Fill in the form and we will get back to you within 2 hours to confirm your slot. Free
                consultation included.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-medium mb-1">Phone / WhatsApp</p>
                    <a href="tel:+995599000000" className="text-white font-bold hover:text-amber-400 transition-colors">
                      +995 599 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-medium mb-1">Location</p>
                    <p className="text-white font-bold">Tbilisi, Georgia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs font-medium mb-1">Working Hours</p>
                    <p className="text-white font-bold">Mon–Sat: 9:00 – 20:00</p>
                    <p className="text-zinc-500 text-sm">Sunday by appointment only</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-10">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-amber-500/5 flex items-center justify-center transition-all duration-200"
                >
                  <Instagram size={18} className="text-zinc-400 hover:text-amber-400 transition-colors" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-amber-500/5 flex items-center justify-center transition-all duration-200"
                >
                  <Facebook size={18} className="text-zinc-400 hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-amber-500/15 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Request Received!</h3>
                  <p className="text-zinc-400 text-sm max-w-xs">
                    We will contact you within 2 hours to confirm your appointment. Thank you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Giorgi Beridze"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+995 5XX XXX XXX"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Service
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all appearance-none text-white"
                    >
                      <option value="" className="text-zinc-500">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Not sure">Not sure — need consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Car make, model, condition, any special requests..."
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-amber-500/25"
                  >
                    Book My Slot <ArrowRight size={16} />
                  </button>

                  <p className="text-zinc-600 text-xs text-center">
                    We will confirm via WhatsApp within 2 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 sm:px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center">
              <Star size={13} className="fill-zinc-950 text-zinc-950" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              Status<span className="text-amber-500">.</span>
            </span>
          </div>

          <p className="text-zinc-600 text-xs text-center">
            &copy; {new Date().getFullYear()} Status Detailing. Tbilisi, Georgia. All rights reserved.
          </p>

          <div className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
