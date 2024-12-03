import posthog from 'posthog-js';

interface TrackEventProps {
    [key: string]: string | number | boolean | undefined; // More controlled types for properties
}

export const initPostHog = () => {
const token = process.env.NEXT_PUBLIC_POSTHOG_TOKEN;
  if (token) {
    posthog.init(token, {
      api_host: 'https://d1dg4kwyb1axhr.cloudfront.net',
      ui_host: 'https://us.posthog.com'
  });
  }
};

export const trackPosthogEvent = (event: string, properties: TrackEventProps = {}): void => {
    posthog.capture(event, properties);
};