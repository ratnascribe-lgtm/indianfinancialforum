import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, FileText, Mic, Newspaper, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Callout, Eyebrow, Hero, Section } from '@/components/iff';
import { pageHead } from '@/lib/site';

export const Route = createFileRoute('/knowledge-hub')({
  head: () => pageHead('Knowledge Hub', 'Blogs, reports, podcasts and webinars from the Indian Financial Forum community.'),
  component: Knowledge,
});

type ContentType = 'Blogs' | 'Reports' | 'Podcasts' | 'Webinars';

const typeIcons = { Blogs: Newspaper, Reports: FileText, Podcasts: Mic, Webinars: Video } as const;

const content: { type: ContentType; title: string; text: string; meta: string }[] = [
  { type: 'Blogs', title: 'The next phase of digital lending in India', text: 'How responsible innovation and evolving regulation are reshaping credit.', meta: '6 min read' },
  { type: 'Blogs', title: 'Building future-ready BFSI talent', text: 'The skills and leadership that will define the next generation of finance professionals.', meta: '5 min read' },
  { type: 'Reports', title: 'State of Indian Banking 2026', text: 'Annual outlook on resilience, capital and growth across the banking sector.', meta: 'Annual report' },
  { type: 'Reports', title: 'Financial Inclusion Index', text: 'Measuring access, usage and quality of financial services across India.', meta: 'Research paper' },
  { type: 'Podcasts', title: 'Conversations with India’s CFOs', text: 'Candid discussions with finance chiefs on treasury, risk and transformation.', meta: 'Episode series' },
  { type: 'Podcasts', title: 'The Regulator’s View', text: 'Policy leaders explain the thinking behind recent regulatory moves.', meta: 'Episode series' },
  { type: 'Webinars', title: 'Digital Lending & FLDG Masterclass', text: 'Decoding digital lending guidelines and first-loss default guarantee frameworks.', meta: '60 min session' },
  { type: 'Webinars', title: 'Treasury & Liquidity Management', text: 'Fresh perspectives on liquidity strategy and financial resilience.', meta: '45 min session' },
];

const filters: ('All' | ContentType)[] = ['All', 'Blogs', 'Reports', 'Podcasts', 'Webinars'];

function Knowledge() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = content.filter(item => filter === 'All' || item.type === filter);
  return <>
    <Hero
      eyebrow="KNOWLEDGE HUB"
      title={<>Ideas and insights from<br />the <em>BFSI</em> community.</>}
      description="Explore blogs, reports, podcasts and webinars created with India’s financial leaders."
    />
    <Section>
      <div className="filter-tabs" role="group" aria-label="Content types">
        {filters.map(x => <Button key={x} size="sm" variant={filter === x ? 'default' : 'ghost'} onClick={() => setFilter(x)}>{x}</Button>)}
      </div>
      <div className="knowledge-grid">
        {visible.map(item => {
          const Icon = typeIcons[item.type];
          return <article className="feature-card knowledge-card" key={item.title}>
            <div className="knowledge-card-top"><Eyebrow>{item.type}</Eyebrow><Icon size={20} aria-hidden /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="knowledge-meta">{item.meta}</span>
            <span className="text-link" aria-disabled="true">Coming soon <ArrowRight size={16} /></span>
          </article>;
        })}
      </div>
    </Section>
    <Callout title="Bring your perspective to the conversation." text="Share your expertise with the IFF community through a blog, report, podcast or webinar." action="Contribute Your Expertise" to="/speaking" />
  </>;
}
