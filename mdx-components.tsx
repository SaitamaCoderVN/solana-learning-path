import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import { EarnBountyWebsite } from '@/components/earn-bounty-website';
import { SolanaBeachWebsite } from '@/components/solana-beach-website';
import SolanaExamQuiz from '@/components/solana-exam-quiz';
import SolanaCodingExamQuiz from '@/components/solana-coding-exam-quiz';
import SolanaInternshipExamQuiz from '@/components/solana-internship-exam-quiz';
import { FaucetWebsite } from './components/faucet-website';

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
    FaucetWebsite: () => <FaucetWebsite />,
    ...components,
  };
}
