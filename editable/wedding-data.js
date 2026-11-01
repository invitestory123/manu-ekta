/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Configured for Manu Gupta & Ekta Gupta — 25th Wedding Anniversary (#EkMan / #EkMann)
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Manu Gupta",
    bride: "Ekta Gupta",
    groomFirst: "Manu",
    brideFirst: "Ekta",
    occasion: "25th Wedding Anniversary",
    hashtag: "#EkMan",
    subtitle: "Celebrating 25 Years of Togetherness<br />Silver Jubilee",
  },

  wedding: {
    dateLabel: "29th NOV - 1st DEC",
    dateISO: "2026-11-29T12:00:00+05:30",
    invitationNote: "Dear Friends and Family,<br />Join us for a celebration of love, laughter, and 25 years of beautiful togetherness as we celebrate our Silver Jubilee!",
  },

  schedule: [
    { title: "The Silver Arrival", time: "12:00 NOON" },
    { title: "Act I / The Opening Toast", time: "1:30 PM" },
    { title: "Act II / The Grand Unwrapping", time: "3:30 PM" },
    { title: "Act III / Nazrana (Mehfil)", time: "8:30 PM" },
    { title: "Past Our Bedtime", time: "12:30 AM" },
    { title: "The Silver Arrival", time: "11:00 AM" },
    { title: "The Poolside Prelude", time: "12:30 PM" },
    { title: "Baraat 2.0", time: "2:30 PM" },
    { title: "Rangrez Lawn", time: "2:30 PM" },
    { title: "The Silver Ball", time: "8:30 PM" },
    { title: "The Farewell Brew", time: "7:30 AM" },
    { title: "Checkout", time: "12:00 NOON" }
  ],

  itinerary: [
    {
      dayId: "day1",
      dayTitle: "29 November",
      dayDate: "Sunday, 29 November 2026",
      tagline: "Arrivals, sundowner, mehfil & after-hours",
      dateShort: "29 Nov",
      overviewCard: "images/events/p06_day1_overview.png",
      footerNote: "The afterparty begins just after midnight on 30 November.",
      events: [
        {
          id: "silver-arrival",
          number: "12:00",
          act: "29 NOVEMBER / ARRIVAL",
          title: "The Silver Arrival",
          subtitle: "Guest check-in",
          quote: "Check in. Unpack. Let the good times in.",
          description: "Your room awaits, and so does a weekend worth celebrating.",
          date: "Sunday, 29 November 2026",
          time: "12:00 noon onwards",
          venue: "Resort reception / Check-in",
          cardImage: "images/events/p07_event_silver_arrival.png"
        },
        {
          id: "opening-toast",
          number: "01",
          act: "ACT I / 29 NOVEMBER",
          title: "The Opening Toast",
          subtitle: "Welcome lunch",
          quote: "The first course of a very good story.",
          description: "A welcome lunch, long conversations and the first cheerful reunion of the celebrations.",
          date: "Sunday, 29 November 2026",
          time: "1:30 PM onwards",
          venue: "Welcome Lunch",
          cardImage: "images/events/p08_event_opening_toast.png"
        },
        {
          id: "grand-unwrapping",
          act: "ACT II / 29 NOVEMBER",
          title: "The Grand Unwrapping",
          subtitle: "A Candlelit Sundowner",
          tagline: "Modern music. Golden hour. A thousand little flames.",
          date: "Sunday, 29 November 2026",
          time: "3:30 - 6:30 PM",
          venue: "Amphitheater / Hi-tea & Music",
          venueArt: "images/events/art/venue_grand_unwrapping.png",
          cardImage: "images/events/p09_event_grand_unwrapping.png",
          dressCode: {
            title: "The Modern Muse",
            subtitle: "Effortless contemporary elegance",
            time: "29 NOVEMBER | 3:30 - 6:30 PM",
            description: "Modern dresses, refined co-ords, smart tailoring and soft evening hues.",
            caricature: "images/events/art/caricature_modern_muse.png",
            cardImage: "images/events/p10_dresscode_modern_muse.png",
            colors: ["#d3c3b4", "#b2a496", "#e9e1d4", "#9a8773"]
          }
        },
        {
          id: "nazrana",
          act: "ACT III / 29 NOVEMBER",
          title: "Nazrana",
          subtitle: "Darbaar After Dark",
          tagline: "An evening of mehfil, melody & mehmaan-nawaazi.",
          date: "Sunday, 29 November 2026",
          time: "8:30 - 11:30 PM",
          venue: "Zen Garden",
          venueArt: "images/events/art/venue_nazrana.png",
          cardImage: "images/events/p11_event_nazrana.png",
          dressCode: {
            title: "Adaa & Andaaz",
            subtitle: "Old-world charm, present-day silhouettes",
            time: "29 NOVEMBER | 8:30 - 11:30 PM",
            description: "Indo-Western: sculpted drapes, velvet bandhgalas, fusion couture.",
            caricature: "images/events/art/caricature_adaa_andaaz.png",
            cardImage: "images/events/p12_dresscode_adaa_andaaz.png",
            colors: ["#4b1828", "#332525", "#aa7d5f", "#cdac89"]
          }
        },
        {
          id: "past-bedtime",
          number: "12:30",
          act: "AFTER HOURS / EARLY 30 NOVEMBER",
          title: "Past Our Bedtime",
          subtitle: "Afterparty - Concord (early 30 November)",
          quote: "The only plan is not to have one.",
          description: "After the mehfil: bigger beats, a little mischief and a dance floor with no curfew.",
          date: "Monday, 30 November 2026",
          time: "12:30 AM onwards",
          venue: "CONCORD / Afterparty",
          isDarkTheme: true,
          cardImage: "images/events/p13_event_past_bedtime.png",
          dressCode: {
            title: "Midnight Mischief",
            subtitle: "The night has no dress rehearsal",
            time: "30 NOVEMBER | 12:30 AM ONWARDS",
            description: "Metallics, cocktailwear, statement jackets and dance-floor glamour.",
            caricature: "images/events/art/caricature_midnight_mischief.png",
            cardImage: "images/events/p14_dresscode_midnight_mischief.png",
            colors: ["#181a1f", "#57525b", "#b69e83", "#a0a4ae"]
          }
        }
      ]
    },
    {
      dayId: "day2",
      dayTitle: "30 November",
      dayDate: "Monday, 30 November 2026",
      tagline: "Come for the day. Stay for the night.",
      dateShort: "30 Nov",
      overviewCard: "images/events/p15_day2_overview.png",
      footerNote: "Arrive by late morning so you can enjoy every moment, starting with poolside lunch at 12:30 PM.",
      events: [
        {
          id: "silver-arrival-day2",
          number: "11:00",
          act: "30 NOVEMBER / ARRIVAL",
          title: "The Silver Arrival",
          subtitle: "Rooms available for check-in",
          quote: "Come for the day. Stay for the night.",
          description: "Arrive by late morning so you can enjoy every moment, starting with poolside lunch at 12:30 PM.",
          date: "Monday, 30 November 2026",
          time: "11:00 AM",
          venue: "Resort reception / Rooms available for check-in",
          cardImage: "images/events/p15_day2_overview.png"
        },
        {
          id: "poolside-prelude",
          number: "12:30",
          act: "30 NOVEMBER / THE MIDDAY INTERLUDE",
          title: "The Poolside Prelude",
          subtitle: "Lunch - Poolside",
          quote: "A relaxed lunch before the celebrations find their feet.",
          description: "Sunshine, familiar faces and a little anticipation before the baraat.",
          date: "Monday, 30 November 2026",
          time: "12:30 PM onwards",
          venue: "POOL SIDE / Lunch",
          cardImage: "images/events/p17_event_poolside_prelude.png"
        },
        {
          id: "baraat",
          act: "30 NOVEMBER / THE JOINT PROCESSION",
          title: "Baraat 2.0",
          subtitle: "Two Leads. One Procession.",
          tagline: "Twenty-five years later, this time we dance in together.",
          date: "Monday, 30 November 2026",
          time: "2:30 - 6:30 PM",
          venue: "Poolside > Machan > Main Lawn",
          venueArt: "images/events/art/photo_baraat_dancing.png",
          cardImage: "images/events/p18_event_baraat.png",
          dressCode: {
            title: "The Bright Side of Baraat",
            subtitle: "Light. Bright. Ready to dance.",
            time: "30 NOVEMBER | 2:30 - 6:30 PM",
            description: "Airy festive silhouettes, cheerful pastels and comfortable movement.",
            caricature: "images/events/art/caricature_bright_side_baraat.png",
            cardImage: "images/events/p19_dresscode_bright_side_baraat.png",
            colors: ["#f3c6b3", "#d3b27a", "#bed3dd", "#efdd9e"]
          }
        },
        {
          id: "rangrez",
          act: "30 NOVEMBER / THE RAJASTHANI CELEBRATION",
          title: "Rangrez Lawn",
          subtitle: "Raag, Rang & Rajasthan",
          tagline: "Folk music and a Rajasthani feast, from every jharokha.",
          date: "Monday, 30 November 2026",
          time: "During the 2:30 - 6:30 PM celebration",
          venue: "Machan & adjoining Main Lawn",
          venueArt: "images/events/art/venue_rangrez.png",
          cardImage: "images/events/p20_event_rangrez.png"
        },
        {
          id: "silver-ball",
          act: "30 NOVEMBER / THE GRAND ANNIVERSARY",
          title: "The Silver Ball",
          subtitle: "The Leopard Edit",
          tagline: "Heritage glamour. A little dramatic instinct.",
          date: "Monday, 30 November 2026",
          time: "8:30 PM onwards",
          venue: "Serenade Garden",
          venueArt: "images/events/art/venue_silver_ball.png",
          cardImage: "images/events/p21_event_silver_ball.png",
          dressCode: {
            title: "Heritage After Dark",
            subtitle: "Vintage glamour with a leopard accent",
            time: "30 NOVEMBER | 8:30 PM ONWARDS",
            description: "Black, oxblood, antique gold; leopard print as an accent, not a costume.",
            caricature: "images/events/art/caricature_heritage_after_dark.png",
            cardImage: "images/events/p22_dresscode_heritage_after_dark.png",
            colors: ["#1c1818", "#50252d", "#ae7f53", "#d1b887"]
          }
        }
      ]
    },
    {
      dayId: "day3",
      dayTitle: "1 December",
      dayDate: "Tuesday, 1 December 2026",
      tagline: "Farewell Morning & The Curtain Call",
      dateShort: "1 Dec",
      overviewCard: null,
      footerNote: "Checked out. Still #EkMan.",
      events: [
        {
          id: "farewell-brew",
          number: "07:30",
          act: "1 DECEMBER / FAREWELL MORNING",
          title: "The Farewell Brew",
          subtitle: "Breakfast - Aurora",
          quote: "One last coffee. Several new stories.",
          description: "A relaxed breakfast before everyone returns to being responsible.",
          date: "Tuesday, 1 December 2026",
          time: "7:30 - 10:30 AM",
          venue: "AURORA / Breakfast",
          cardImage: "images/events/p24_event_farewell_brew.png"
        },
        {
          id: "checkout",
          act: "1 DECEMBER / THE CURTAIN CALL",
          title: "Checkout",
          subtitle: "By 12:00 noon",
          quote: "Checked out. Still #EkMan.",
          description: "Thank you for making our Silver Jubilee an occasion worth remembering.",
          date: "Tuesday, 1 December 2026",
          time: "By 12:00 noon",
          venue: "Buena Vista Luxury Resorts & Garden Spa",
          signature: "MANU & EKTA",
          cardImage: "images/events/p25_event_checkout.png"
        }
      ]
    }
  ],

  venue: {
    name: "Buena Vista Luxury Resorts & Garden Spa",
    address: "Jaipur",
    mapsUrl: "https://maps.app.goo.gl/bsTEjSybxpoKaKLw9?g_st=ic",
  },

  details: {
    giftPreference: "Your presence and blessings are our greatest gift.",
    dressCode: "Mehfil Night • Folk Festive • The Silver Ball (The Leopard Edit) / Elegant Evening Attire",
  },

  media: {
    overlayImage: "editable/assets/envelope-cover.webp",
    sealVideo: "editable/assets/1782224012851.mp4",
    heroVideo: "editable/assets/Swans2.mov",
    audio: "editable/assets/background-music.mp3",
  },
};
