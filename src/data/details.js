/**
 * Restaurant details — edited in ONE place, used by the footer,
 * contact page, and home page. For a real client this is the file
 * (or Google Sheet) their team updates when hours change.
 */

export const HOURS = [
  { days: "Tue – Thu", time: "5:00 PM – 10:00 PM" },
  { days: "Fri – Sat", time: "5:00 PM – 11:30 PM" },
  { days: "Sunday", time: "11:00 AM – 9:00 PM" },
  { days: "Monday", time: "Closed" },
];

export const ADDRESS = {
  line1: "12 Foundry Lane",
  line2: "Old Town District",
  /* Used by the embedded map on the Contact page — replace with the
     client's real address; no API key needed for this embed style. */
  mapQuery: "Foundry Lane Old Town",
};

export const PHONE = "+1 000 000 0000";
export const EMAIL = "hello@emberandthyme.com";
