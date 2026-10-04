import type { Brand } from "./types";

export const brand: Brand = {
  slug: "serenityluxfloral",
  name: "Serenity Lux Floral",
  handle: "@serenityluxfloral",
  instagram: "https://www.instagram.com/serenityluxfloral/",
  location: "Ajax",
  region: "Ontario",
  country: "CA",
  variant: "quiet",
  eyebrow: "Ajax · Toronto · GTA",
  headline: "Quiet luxury, imported stems, five days’ notice.",
  subhead:
    "Serenity Lux Floral is a Toronto and GTA florist based in Ajax. Flowers are imported from Ecuador and Colombia. Please give 5–7 days’ notice. A 50% non-refundable deposit holds the order.",
  orderNote:
    "Ajax, Toronto, and the GTA. Imported flowers from Ecuador and Colombia. 5–7 days’ notice. 50% non-refundable deposit. Orders by Instagram DM.",
  stats: [
    { value: "1.1K", label: "Instagram followers" },
    { value: "207", label: "posts on the feed" },
    { value: "5–7", label: "days of notice" },
    { value: "50%", label: "non-refundable deposit" },
  ],
  styles: [
    { id: "lily", name: "Lilies", blurb: "White and pink lily bouquets, the quiet ones on the recent reels." },
    { id: "orchid", name: "Orchids", blurb: "Red orchid bouquets and orchid mixed with a plush." },
    { id: "letter", name: "Custom letter", blurb: "A letter set into red roses or another colour you name." },
    { id: "plush", name: "Plush bouquet", blurb: "Jellycat or Snoopy with orchids, when that is the gift." },
    { id: "rose", name: "Rose bouquet", blurb: "Imported roses in a single colour or a soft mix." },
    { id: "describe", name: "I will describe it", blurb: "Occasion, palette, and a photo if you have one." },
  ],
  wraps: [
    { id: "ivory", name: "Ivory", blurb: "Cream paper for lilies and whites." },
    { id: "blush", name: "Blush", blurb: "A pale pink wrap." },
    { id: "black", name: "Black", blurb: "Dark paper for red orchids and deep roses." },
    { id: "wine", name: "Wine", blurb: "A deeper wrap for reds." },
  ],
  details: [
    { id: "birthday", name: "Birthday", blurb: "The birthday highlight is one of the busiest." },
    { id: "baby", name: "New baby", blurb: "Soft colour and a card line." },
    { id: "engage", name: "Engagement", blurb: "Share the date. Notice is 5–7 days." },
    { id: "grad", name: "Graduation", blurb: "A dated bouquet. Ask early in the season." },
    { id: "valentine", name: "Valentine’s or Mother’s Day", blurb: "Holiday weeks book up. Write sooner." },
  ],
  fulfillments: [
    { id: "pickup", name: "Pickup in Ajax", blurb: "The studio is in Ajax. Confirm the window." },
    { id: "delivery", name: "Toronto or GTA delivery", blurb: "Delivery is offered on the feed. Share the city." },
  ],
  gallery: [
    {
      title: "Lilies",
      note: "White lily bouquets. Mood photo — the reel is the real arrangement.",
      image: "/media/lily.jpg",
      href: "https://www.instagram.com/serenityluxfloral/reel/DdpY0tpxqYe/",
    },
    {
      title: "Orchids",
      note: "Red orchid bouquets from the Toronto feed.",
      image: "/media/white.jpg",
      href: "https://www.instagram.com/serenityluxfloral/",
    },
    {
      title: "Letters and roses",
      note: "Custom letter bouquets, including red roses.",
      image: "/media/roses.jpg",
      href: "https://www.tiktok.com/@serenityluxfloral/video/7646564645620272385",
    },
    {
      title: "A plush in the flowers",
      note: "Snoopy with orchids, and Jellycat bouquets, when the gift is both.",
      image: "/media/blush.jpg",
      href: "https://www.tiktok.com/@serenityluxfloral/video/7688114729507720465",
    },
  ],
  occasions: [
    { name: "Birthday", note: "A bouquet with notice, not a same-day guess.", image: "/media/peony.jpg" },
    { name: "New baby", note: "Soft stems and a short card line.", image: "/media/white.jpg" },
    { name: "Engagement", note: "Five to seven days so the imported stems can land.", image: "/media/wedding.jpg" },
  ],
  faqs: [
    {
      q: "How far ahead should I write?",
      a: "The bio asks for 5–7 days’ notice. Holiday weeks and graduations need longer.",
    },
    {
      q: "Where do the flowers come from?",
      a: "The account says flowers are imported from Ecuador and Colombia.",
    },
    {
      q: "Is there a deposit?",
      a: "Yes. 50% is non-refundable. The figure is confirmed in the DM, not on this site.",
    },
    {
      q: "Where are you based?",
      a: "Ajax, serving Toronto and the GTA.",
    },
    {
      q: "Do you ship across Canada?",
      a: "No. This is local florist work: pickup and GTA delivery arranged in the chat.",
    },
  ],
  about: [
    "Serenity Lux Floral is the Ajax studio at @serenityluxfloral, working across Toronto and the GTA. The feed moves through birthdays, new babies, engagements, grads, Valentine’s Day, and Mother’s Day.",
    "Stems are imported from Ecuador and Colombia, which is why the account asks for 5–7 days’ notice. A 50% non-refundable deposit holds the work.",
    "Custom letters, orchid bouquets, lily bunches, and the occasional plush — Snoopy, a Jellycat — show up when the gift needs a character as well as flowers.",
  ],
  policies: [
    "5–7 days’ notice.",
    "50% non-refundable deposit.",
    "Ajax pickup, Toronto and GTA delivery by arrangement.",
  ],
  quote: {
    text: "Give the flowers a week. They are still on the way from the equator.",
    by: "Ajax · DM @serenityluxfloral",
  },
  photoCredit: "Mood photographs are stock florals. Finished arrangements are on the public Instagram and TikTok accounts.",
};
