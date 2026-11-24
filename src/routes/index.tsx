import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Action, Callout, EventsGrid, FeatureGrid, Hero, Insights, Section, Eyebrow, type Destination } from '@/components/iff';
import { pageHead } from '@/lib/site';
import jpmorganLogo from '@/assets/jpmorgan-logo.svg.asset.json';

export const Route = createFileRoute('/')({ head: () => pageHead('The Community Behind BFSI Leadership', 'Connect with India’s financial community. Explore professional networks, leadership events and institutional partnerships with IFF.'), component: Home });
const experiences: { title: string; text: string; to: Destination }[] = [
  { title: 'For Professionals', text: 'Explore communities and grow your network. Access exclusive sector insights, participate in confidential industry dialogue, and connect with leaders shaping the financial ecosystem.', to: '/professionals' },
  { title: 'For Organisations', text: 'Build trusted relationships with India’s financial leadership. Explore institutional partnerships, curated executive roundtables and collaborative industry initiatives.', to: '/organisations' },
  { title: 'Events', text: 'Experience conversations that matter. Meet industry leaders at summits, executive roundtables and focused networking assemblies.', to: '/events' },
  { title: 'Knowledge Hub', text: 'Discover practical perspectives on policy, leadership, emerging technology and the future of Indian financial services.', to: '/knowledge-hub' },
];
const faqs = [
  { question: 'What is IFF, and how does it support finance networking in India?', answer: 'The Indian Financial Forum (IFF) is an exclusive, community-driven platform bringing together senior professionals and decision-makers across banking, NBFCs, insurance, fintech, asset management and other financial services sectors. Through curated finance networking opportunities, industry discussions and leadership interactions, IFF helps members build meaningful professional connections and exchange industry perspectives.' },
  { question: 'What types of finance networking events does IFF organise?', answer: 'IFF organises curated finance networking events, including executive roundtables, leadership breakfast meetings, boardroom discussions, industry conclaves, community meetups and networking experiences. These formats encourage meaningful conversations, peer learning and collaboration among BFSI professionals.' },
  { question: "Who can participate in IFF's finance networking opportunities?", answer: 'IFF brings together CXOs, senior executives, functional leaders and decision-makers from across the financial services ecosystem. Its networking opportunities are designed for professionals from banks, NBFCs, insurance companies, fintechs, asset managers and technology service providers.' },
  { question: 'How are IFF events different from other banking and finance events?', answer: 'Unlike large-scale conferences focused primarily on presentations and audience reach, IFF focuses on curated interactions and community engagement. Its finance forums and networking events create opportunities for senior professionals to exchange ideas, discuss industry challenges and build relationships with relevant peers.' },
  { question: 'Where can I find upcoming finance events and BFSI events in India?', answer: 'You can explore upcoming IFF events through the Events section of the IFF website and follow IFF on LinkedIn for announcements. The calendar features curated networking opportunities, leadership discussions and community gatherings across the financial services ecosystem.' },
  { question: 'Does IFF provide trade finance networking opportunities?', answer: 'IFF brings together professionals from across the banking and financial services ecosystem, creating opportunities to connect with peers and industry leaders. Professionals working in trade finance can explore relevant discussions, knowledge-sharing initiatives and networking opportunities through the IFF community.' },
  { question: 'Can I contribute to IFF through finance volunteer work or community initiatives?', answer: 'IFF encourages active participation in its professional community. Members can explore opportunities to contribute through industry insights, thought leadership, community initiatives, speaking engagements and knowledge-sharing activities. To understand current opportunities to get involved, connect with the IFF team.' },
];
function Home() { const [tab, setTab] = useState(0); const selected = experiences[tab]; return <>
  <Hero dark eyebrow="INDIA’S LEADING FINANCIAL FORUM" title={<>The Community Behind the<br className="desktop-break" /> Growth of a BFSI Professional</>} description="Easiest way to connect collaborate and grow" action="Join IFF" ><Action secondary to="/organisations">Partner with Us</Action></Hero>
   <section className="member-testimonials">
     <div className="container">
       <div className="member-testimonials-heading"><Eyebrow>COMMUNITY VOICES</Eyebrow><h2>What members say</h2></div>
       <div className="testimonial-cards">
         <article className="testimonial-card testimonial-card-featured">
           <div className="testimonial-card-top"><span className="testimonial-quote-mark" aria-hidden="true">“</span><img src={jpmorganLogo.url} alt="J.P. Morgan" /></div>
           <blockquote>Amazing platform that provides me opportunities to connect with BFSI individuals from multiple companies and helps me stay updated with whats happening in the sector</blockquote>
           <div className="testimonial-person"><span className="testimonial-avatar" aria-hidden="true">EV</span><span><strong>Ekta Vaswani</strong><small>Vice President</small></span></div>
         </article>
         {[
           'More member perspectives will be featured here soon.',
           'The next community story is on its way.',
           'Member experiences from across BFSI are coming soon.',
         ].map((text, index) => <article className="testimonial-card testimonial-card-placeholder" key={text}>
           <div className="testimonial-card-top"><span className="testimonial-quote-mark" aria-hidden="true">“</span><span className="testimonial-coming-soon">COMING SOON</span></div>
           <p>{text}</p>
           <div className="testimonial-person"><span className="testimonial-avatar testimonial-avatar-placeholder" aria-hidden="true">IFF</span><span><strong>IFF Community</strong><small>Member story {index + 2}</small></span></div>
         </article>)}
       </div>
     </div>
   </section>
  <Section blue eyebrow="OUR IMPACT" title="A Larger, Stronger BFSI Community." description="A growing community. A larger purpose. Bringing professionals, leaders and organisations together to exchange knowledge, build relationships and create new opportunities across financial services."><div className="impact-grid">{[['5,000+', 'Community Members', 'From senior leaders and practitioners to emerging industry talent.'], ['250+', 'Industry Leaders', 'C-suite voices bringing experience, perspectives and forward thinking.'], ['100+', 'Engaged Events', 'Meaningful conversations, collaboration and shared industry experiences.'], ['40+', 'Hosted Partners', 'Institutions across BFSI, fintech, policy and academic networks.'], ['300+', 'Knowledge Sessions', 'Curated masterclasses, leadership dialogues and policy briefings.'], ['25+', 'Cities & Communities', 'Connecting professionals across regional and metropolitan financial centres.']].map(([n,t,d]) => <article key={t}><Network size={21} /><strong>{n}</strong><h3>{t}</h3><p>{d}</p></article>)}</div></Section>
  <Section eyebrow="EXPLORE IFF" title="Find the experience that’s right for you." description="Choose a path based on where you want to go next: grow your network, build visibility, find an event or discover new thinking."><div className="experience-grid"><div className="experience-tabs">{experiences.map((e,i) => <Button variant="ghost" key={e.title} onClick={() => setTab(i)} className={tab === i ? 'selected' : ''}><span>0{i+1}</span><span><strong>{e.title}</strong><small>{i === 0 ? 'Explore communities and grow your network.' : i === 1 ? 'Partner with IFF and engage the ecosystem.' : i === 2 ? 'Experience conversations, roundtables and summits.' : 'Ideas, insights and practical perspectives.'}</small></span><ArrowRight /></Button>)}</div><div className="experience-detail"><Eyebrow>YOUR IFF EXPERIENCE</Eyebrow><h3>{selected?.title}</h3><p>{selected?.text}</p><div className="benefit-grid"><span>✓ Peer-to-Peer Exchange</span><span>✓ Chatham House Discourse</span><span>✓ Leadership Visibility</span><span>✓ Curated BFSI Intelligence</span></div><Action secondary to={selected?.to || '/professionals'}>Enter {selected?.title}</Action></div></div></Section>
  <Section blue eyebrow="INDUSTRY COMMUNITIES" title="Find your industry network." description="Focused communities for people working across the financial ecosystem. Find the one that matches your world."><FeatureGrid items={['Retail Banking','Digital Finance','Risk & Compliance','Wealth & Asset Management','Payments & FinTech','Sustainable Finance'].map(t => ({ title:t,text:'Connect with industry peers, exchange practical perspectives and contribute to the conversations shaping your sector.',link:'Explore network',to:'/professionals' }))} /><div className="section-end"><Action secondary to="/professionals">View All Communities</Action></div></Section>
  <Section eyebrow="EVENTS AT IFF" title="Discover upcoming experiences at IFF." description="Curated conversations to meet peers, exchange perspectives and build relationships."><EventsGrid limit={3} /><div className="section-end"><Action secondary to="/events">View all events</Action></div></Section>
  <Section blue eyebrow="KNOWLEDGE & INSIGHTS" title="Perspectives shaping the future of BFSI." description="Ideas, perspectives and practical intelligence from people working at the centre of financial services."><Insights /><div className="section-end"><Action secondary to="/knowledge-hub">Explore Knowledge Hub</Action></div></Section>
  <Callout />
  <Section blue eyebrow="COMMON QUESTIONS" title="Frequently Asked Questions" description="Learn more about IFF, its community and finance networking opportunities.">
    <Accordion type="single" collapsible className="home-faq-list">
      {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index + 1}`} className="home-faq-item">
        <AccordionTrigger className="home-faq-trigger">{faq.question}</AccordionTrigger>
        <AccordionContent className="home-faq-answer"><p>{faq.answer}</p></AccordionContent>
      </AccordionItem>)}
    </Accordion>
  </Section>
</>; }
