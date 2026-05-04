import type { TimelineEventMeta } from './types';

// inExposureWindow: true marks the events that fall inside the
// "public signal → official advisory" gap that the timeline section highlights.
export const TIMELINE_EVENTS: ReadonlyArray<TimelineEventMeta> = [
  { id: 'day0Signal', inExposureWindow: true },
  { id: 'day0Flag', inExposureWindow: true },
  { id: 'day3Merge', inExposureWindow: true },
  { id: 'day7Release', inExposureWindow: true },
  { id: 'day14Cve', inExposureWindow: false },
  { id: 'day14Scanner', inExposureWindow: false },
];
