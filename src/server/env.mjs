import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({

  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {

    // Backend Postgres, for optional storage via Prisma
    POSTGRES_PRISMA_URL: z.string().optional(),
    POSTGRES_URL_NON_POOLING: z.string().optional(),
    // Backend MongoDB, for a more complete developer data platform.
    MDB_URI: z.string().optional(),

    // LLM: OpenAI
    OPENAI_API_KEY: z.string().optional(),
    OPENAI_API_HOST: z.string().url().optional(),
    OPENAI_API_ORG_ID: z.string().optional(),

    // LLM: Azure OpenAI
    AZURE_OPENAI_API_ENDPOINT: z.string().url().optional(),
    AZURE_OPENAI_API_KEY: z.string().optional(),

    // LLM: Anthropic
    ANTHROPIC_API_KEY: z.string().optional(),
    ANTHROPIC_API_HOST: z.string().url().optional(),

    // LLM: Google AI's Gemini
    GEMINI_API_KEY: z.string().optional(),

    // LLM: Groq
    GROQ_API_KEY: z.string().optional(),

    // LLM: LocalAI
    LOCALAI_API_HOST: z.string().url().optional(),
    LOCALAI_API_KEY: z.string().optional(),

    // LLM: Mistral
    MISTRAL_API_KEY: z.string().optional(),

    // LLM: Ollama
    OLLAMA_API_HOST: z.string().url().optional(),

    // LLM: OpenRouter
    OPENROUTER_API_KEY: z.string().optional(),

    // LLM: Perplexity
    PERPLEXITY_API_KEY: z.string().optional(),

    // LLM: Toghether AI
    TOGETHERAI_API_KEY: z.string().optional(),

    // Helicone - works on both OpenAI and Anthropic vendors
    HELICONE_API_KEY: z.string().optional(),

    // ElevenLabs - speech.ts
    ELEVENLABS_API_KEY: z.string().optional(),
    ELEVENLABS_API_HOST: z.string().url().optional(),
    ELEVENLABS_VOICE_ID: z.string().optional(),

    // Prodia
    PRODIA_API_KEY: z.string().optional(),

    // Google Custom Search
    GOOGLE_CLOUD_API_KEY: z.string().optional(),
    GOOGLE_CSE_ID: z.string().optional(),

    // Browsing Service
    PUPPETEER_WSS_ENDPOINT: z.string().url().optional(),

    // Backend: Analytics flags (e.g. which hostname responds) for managed installs
    BACKEND_ANALYTICS: z.string().optional().transform(list => (list || '').split(';').filter(flag => !!flag)),

    // Backend: HTTP Basic Authentication
    HTTP_BASIC_AUTH_USERNAME: z.string().optional(),
    HTTP_BASIC_AUTH_PASSWORD: z.string().optional(),

    // Build-time configuration
    BIG_AGI_BUILD: z.enum(['standalone', 'static']).optional(),

    MAX_HISTORY_LENGTH: z.string(),

    MAX_CONCURRENT_PANES: z.string(),

    DEBUG_PANES_MANAGER: z.string(),

    DEBUG_SCHEDULER: z.string(),
    USER_LOG_ISSUES: z.string(),

    SERVER_DEBUG_WIRE: z.string(),

  },

  /*
   * Environment variables available on the client (and server).
   * You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   *
   * NOTE: they must be set at build time, not runtime(!)
   */
  client: {

    // Frontend: Google Analytics GA4 Measurement ID
    NEXT_PUBLIC_GA4_MEASUREMENT_ID: z.string().optional(),

    // Frontend: server to use for PlantUML rendering
    NEXT_PUBLIC_PLANTUML_SERVER_URL: z.string().url().optional(),

    NEXT_PUBLIC_URLNAME: z.string().url().optional(),
    NEXT_PUBLIC_CARDIMAGE: z.string().url().optional(),
    NEXT_PUBLIC_OPENREPO: z.string().url().optional(),
    NEXT_PUBLIC_OPENPROJECT: z.string().url(),
    NEXT_PUBLIC_SUPPORTINVITEDISCORD: z.string().url().optional(),
    NEXT_PUBLIC_PRIVACYPOLICY: z.string().url(),
    NEXT_PUBLIC_TITLEAPP: z.string(),
    NEXT_PUBLIC_TWITTERSITE: z.string(),
    NEXT_PUBLIC_SHOW_PURPOSE_FINDER: z.string().optional(),

  },

  onValidationError: error => {
    console.error('❌ Invalid environment variables:', error.issues);
    throw new Error('Invalid environment variable');
  },

  // matches user expectations - see https://github.com/enricoros/big-AGI/issues/279
  emptyStringAsUndefined: true,

  // with Next.JS >= 13.4.4 we'd only need to destructure client variables

  experimental__runtimeEnv: {
    NEXT_PUBLIC_GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
    NEXT_PUBLIC_PLANTUML_SERVER_URL: process.env.NEXT_PUBLIC_PLANTUML_SERVER_URL,
    NEXT_PUBLIC_URLNAME: process.env.NEXT_PUBLIC_URLNAME,
    NEXT_PUBLIC_CARDIMAGE: process.env.NEXT_PUBLIC_CARDIMAGE,
    NEXT_PUBLIC_OPENREPO: process.env.NEXT_PUBLIC_OPENREPO,
    NEXT_PUBLIC_OPENPROJECT: process.env.NEXT_PUBLIC_OPENPROJECT,
    NEXT_PUBLIC_SUPPORTINVITEDISCORD: process.env.NEXT_PUBLIC_SUPPORTINVITEDISCORD,
    NEXT_PUBLIC_PRIVACYPOLICY: process.env.NEXT_PUBLIC_PRIVACYPOLICY,
    NEXT_PUBLIC_TITLEAPP: process.env.NEXT_PUBLIC_TITLEAPP,
    NEXT_PUBLIC_TWITTERSITE: process.env.NEXT_PUBLIC_TWITTERSITE,
    NEXT_PUBLIC_SHOW_PURPOSE_FINDER: process.env.NEXT_PUBLIC_SHOW_PURPOSE_FINDER,
  },

});
