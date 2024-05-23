/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */

interface BrandInterface {
  Title: {
    Base: string;
    Common: string;
  },
  Meta: {
    Description: string;
    SiteName: string;
    ThemeColor: string;
    TwitterSite: string;
  },
  URIs: {
    Home: string;
    HomeNoProt: string;
    CardImage: string;
    OpenRepo: string | undefined;
    OpenProject: string | undefined;
    SupportInvite: string | undefined;
    PrivacyPolicy: string;
  },
}

export const Brand:BrandInterface = {
  Title: {
    Base: 'TheChat',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + process.env.NEXT_PUBLIC_TITLEAPP!,
  },
  Meta: {
    Description: 'Launch big-AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'big-AGI | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: process.env.NEXT_PUBLIC_TWITTERSITE!,
  },
  URIs: {
    Home: process.env.NEXT_PUBLIC_URLNAME!,
    HomeNoProt: process.env.NEXT_PUBLIC_URLNAME!.replace('https://', ''),
    // App: 'https://get.big-agi.com',
    CardImage: process.env.NEXT_PUBLIC_CARDIMAGE!,
    OpenRepo: process.env.NEXT_PUBLIC_OPENREPO,
    OpenProject: process.env.NEXT_PUBLIC_OPENPROJECT,
    SupportInvite: process.env.NEXT_PUBLIC_SUPPORTINVITEDISCORD,
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: process.env.NEXT_PUBLIC_PRIVACYPOLICY!,
  },
} as const;