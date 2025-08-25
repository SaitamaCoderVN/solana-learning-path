import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { EarnBountyWebsite } from '@/components/earn-bounty-website';
import { SolanaBeachWebsite } from '@/components/solana-beach-website';
import SolanaExamQuiz from '@/components/solana-exam-quiz';
import SolanaCodingExamQuiz from '@/components/solana-coding-exam-quiz';
import SolanaInternshipExamQuiz from '@/components/solana-internship-exam-quiz';
import GoogleSlidesEmbed from '@/components/google-slides-embed';
import LearningResources from '@/components/learning-resources';
import { FaucetWebsite } from './components/faucet-website';
import { TabbedContent, TabList, Tab, TabContent } from "@/components/ui/tabs"
import { GoogleCalendarEmbed } from "@/components/ui/google-calendar-embed"

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Image: (props: any) => <Image {...props} />,
    EarnBountyWebsite: () => <EarnBountyWebsite />,
    SolanaBeachWebsite: () => <SolanaBeachWebsite />,
    SolanaExamQuiz: () => <SolanaExamQuiz />,
    SolanaCodingExamQuiz: () => <SolanaCodingExamQuiz />,
    SolanaInternshipExamQuiz: () => <SolanaInternshipExamQuiz />,
    GoogleSlidesEmbed: (props: any) => <GoogleSlidesEmbed {...props} />,
    LearningResources: () => <LearningResources />,
    FaucetWebsite: () => <FaucetWebsite />,
    TabbedContent,
    TabList,
    Tab,
    TabContent,
    GoogleCalendarEmbed,
    ...components
  };
}
