// ==========================================================
// SHARED VOCABULARY BANK FOR ALL STUDY QUEST GAMES
// Change ACTIVE_VOCAB_UNIT below to switch units across all games!
// ==========================================================

const ACTIVE_VOCAB_UNIT = "lesson3_synonyms";

const VOCAB_BANK = {
  
  // --------------------------------------------------------
  // LESSON 3: HOME & COMMUNITY (DEFINITIONS + CONTEXT + SYNONYMS)
  // --------------------------------------------------------
  "lesson3_synonyms": {
    title: "Lesson 3: Vocabulary Power",
    subtitle: "Definitions, Context & Synonyms",
    questions: [
      // --- PART 1: EXACT DICTIONARY DEFINITIONS (10 Questions) ---
      {
        q: "Definition (verb): To put up with or tolerate; to accept or act in accordance with a rule or decision:",
        ans: "abide",
        dist: ["dwell", "nurture", "reliance"],
        hint: "Means to bear patiently or follow the rules."
      },
      {
        q: "Definition (adj.): Shared by all members of a community; intended for common use by a group:",
        ans: "communal",
        dist: ["kindred", "resident", "vicinity"],
        hint: "Belonging to everyone in the group rather than just one person."
      },
      {
        q: "Definition (verb): To live or stay as a permanent resident in a particular place; or to linger on a thought:",
        ans: "dwell",
        dist: ["abide", "nurture", "edifice"],
        hint: "To make your home in a specific place."
      },
      {
        q: "Definition (noun): A building, especially one of very large size or imposing, grand appearance:",
        ans: "edifice",
        dist: ["vicinity", "sentiment", "reliance"],
        hint: "A massive architectural structure like a courthouse, palace, or cathedral."
      },
      {
        q: "Definition (noun / adj.): One's family and relations; or having a similar nature, character, or shared beliefs:",
        ans: "kindred",
        dist: ["resident", "communal", "sentiment"],
        hint: "Connected by blood (kin) or having a closely related personality."
      },
      {
        q: "Definition (verb): To care for, feed, and protect a person, animal, or plant while it is growing and developing:",
        ans: "nurture",
        dist: ["abide", "dwell", "reliance"],
        hint: "To help something grow and thrive through care and encouragement."
      },
      {
        q: "Definition (noun): The state of depending on or placing trust and confidence in someone or something:",
        ans: "reliance",
        dist: ["sentiment", "vicinity", "communal"],
        hint: "Comes from the verb 'rely'—needing someone or something for support."
      },
      {
        q: "Definition (noun): A person who lives somewhere permanently or on a long-term basis (as opposed to a visitor):",
        ans: "resident",
        dist: ["kindred", "edifice", "vicinity"],
        hint: "Someone who resides in a specific house, city, or state."
      },
      {
        q: "Definition (noun): A view, attitude, or opinion toward something; or a tender emotion and feeling:",
        ans: "sentiment",
        dist: ["reliance", "nurture", "edifice"],
        hint: "Emotional feelings of warmth, nostalgia, or how you feel about a topic."
      },
      {
        q: "Definition (noun): The area near or surrounding a particular place; the surrounding neighborhood:",
        ans: "vicinity",
        dist: ["edifice", "communal", "dwell"],
        hint: "Refers to the nearby region or close proximity."
      },

      // --- PART 2: SENTENCE CONTEXT & SECONDARY DEFINITIONS (10 Questions) ---
      {
        q: "Complete the sentence: 'If you want to play in the tournament, you must _____ by the referee's rules.'",
        ans: "abide",
        dist: ["dwell", "nurture", "communal"],
        hint: "To accept and obey a rule or decision."
      },
      {
        q: "Complete the sentence: 'In the summer camp cabin, all campers shared a _____ kitchen and dining hall.'",
        ans: "communal",
        dist: ["kindred", "resident", "edifice"],
        hint: "Shared by the whole community of campers."
      },
      {
        q: "Complete the sentence: 'Try not to _____ on your past mistakes; instead, focus on how to improve tomorrow.'",
        ans: "dwell",
        dist: ["abide", "nurture", "sentiment"],
        hint: "Secondary definition: to keep thinking or talking about something for a long time."
      },
      {
        q: "Complete the sentence: 'The ancient stone _____ had stood on the hill overlooking the harbor for three centuries.'",
        ans: "edifice",
        dist: ["vicinity", "reliance", "resident"],
        hint: "A large, impressive building."
      },
      {
        q: "Complete the sentence: 'Because both boys loved fishing and building forts, they immediately knew they were _____ spirits.'",
        ans: "kindred",
        dist: ["communal", "resident", "vicinity"],
        hint: "Having a very similar nature or shared interests."
      },
      {
        q: "Complete the sentence: 'The gardener used rich soil and warm sunlight to _____ the fragile young tomato plants.'",
        ans: "nurture",
        dist: ["abide", "dwell", "reliance"],
        hint: "To nourish and care for something so it grows."
      },
      {
        q: "Complete the sentence: 'Early settlers had a heavy _____ on the river for fresh water and transportation.'",
        ans: "reliance",
        dist: ["sentiment", "edifice", "vicinity"],
        hint: "Dependence on something essential."
      },
      {
        q: "Complete the sentence: 'Every _____ on our street received a letter about the upcoming neighborhood block party.'",
        ans: "resident",
        dist: ["kindred", "edifice", "sentiment"],
        hint: "A person who lives in that neighborhood."
      },
      {
        q: "Complete the sentence: 'My grandfather kept his old baseball glove not for its value, but out of pure _____.'",
        ans: "sentiment",
        dist: ["reliance", "vicinity", "communal"],
        hint: "Tender emotional attachment or nostalgic feeling."
      },
      {
        q: "Complete the sentence: 'We lost our dog near the school, so we searched the entire surrounding _____.'",
        ans: "vicinity",
        dist: ["edifice", "reliance", "kindred"],
        hint: "The surrounding area or neighborhood."
      },

      // --- PART 3: COUPLE OF SYNONYM CHECKS (5 Questions) ---
      {
        q: "Synonym Check: Which two words are closest in meaning to 'abide' and 'communal'?",
        ans: "tolerate / public",
        dist: ["inhabit / building", "family / feeling", "depend / neighborhood"],
        hint: "Abide means tolerate; communal means public/shared."
      },
      {
        q: "Synonym Check: Which word is a direct synonym for 'imposing building' or 'massive structure'?",
        ans: "edifice",
        dist: ["vicinity", "resident", "reliance"],
        hint: "Starts with E."
      },
      {
        q: "Synonym Check: Which word is a direct synonym for 'dependence' or 'trust'?",
        ans: "reliance",
        dist: ["sentiment", "nurture", "kindred"],
        hint: "Relying on someone."
      },
      {
        q: "Synonym Check: Which word is a direct synonym for 'neighborhood' or 'surrounding area'?",
        ans: "vicinity",
        dist: ["edifice", "communal", "resident"],
        hint: "'In the immediate _____.'"
      },
      {
        q: "Synonym Check: Which word is a direct synonym for 'nourish', 'foster', or 'care for'?",
        ans: "nurture",
        dist: ["abide", "dwell", "sentiment"],
        hint: "Helping someone or something grow."
      }
    ]
  },

  // --------------------------------------------------------
  // ARCHIVED: UNIT 4 GREEK & LATIN ROOTS (cycl, circ, centr)
  // --------------------------------------------------------
  "unit4_roots": {
    title: "Unit 4: Circles, Cycles & Centers",
    subtitle: "Roots: cycl, circ/circum, centr",
    questions: [
      { q: "A set of events or actions that happen again and again in the same order:", ans: "cycle", dist: ["cyclone", "circuit", "circumstance"], hint: "The water _____ consists of evaporation, condensation, and precipitation." },
      { q: "Happening again and again in the same order; occurring in recurring cycles:", ans: "cyclical", dist: ["central", "concentric", "eccentric"], hint: "The four seasons of Earth change in a _____ manner." },
      { q: "An extremely large, powerful, destructive storm with high winds turning around low pressure:", ans: "cyclone", dist: ["circumference", "circumvent", "cycle"], hint: "A spinning vortex storm." },
      { q: "The length of a line that goes around a circle or other round shape:", ans: "circumference", dist: ["circuit", "central", "concentric"], hint: "The perimeter distance around a circle." },
      { q: "The complete, closed path that an electric current travels along:", ans: "circuit", dist: ["circumstance", "circumvent", "cycle"], hint: "Electricity travels around this closed loop." },
      { q: "A condition or fact that affects a situation, environment, or event:", ans: "circumstance", dist: ["circumference", "eccentric", "cyclical"], hint: "A flat tire can be a bad _____ that makes you late." },
      { q: "To get around something in a clever or dishonest way; to bypass:", ans: "circumvent", dist: ["concentric", "circuit", "cyclone"], hint: "Trying to bypass a rule or obstacle." },
      { q: "Located directly in the center or middle of a thing or place:", ans: "central", dist: ["concentric", "eccentric", "cyclical"], hint: "Located in the middle." },
      { q: "When two or more circles or objects share the exact same center point:", ans: "concentric", dist: ["eccentric", "central", "circumference"], hint: "Target rings are _____." },
      { q: "Tending to act in strange, odd, or unusual ways ('out of center'):", ans: "eccentric", dist: ["central", "concentric", "circumstance"], hint: "Unusual or quirky behavior." }
    ]
  }
};

function getActiveVocabData() {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedUnit = urlParams.get('unit');
  if (requestedUnit && VOCAB_BANK[requestedUnit]) {
    return VOCAB_BANK[requestedUnit];
  }
  return VOCAB_BANK[ACTIVE_VOCAB_UNIT];
}
