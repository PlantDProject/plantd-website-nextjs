import mixpanel from 'mixpanel-browser';

interface TrackEventProps {
    [key: string]: string | number | boolean | undefined; // More controlled types for properties
}

export const initMixpanel = (): void => {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  if (token) {
    mixpanel.init(token);
  }
};

export const trackMixpanelEvent = (eventName: string, properties: TrackEventProps = {}): void => {
    if (typeof window !== 'undefined' && mixpanel) {
        mixpanel.track(eventName, properties);
    }
};
