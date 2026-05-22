// ============================================================
// COMEDY PLAYBOOK — DATA.JS
// Single source of truth for all content from:
// main.txt, c1.txt, c2.txt, c3.txt, c4.txt, c5.txt, c6.txt, c7.txt, audit1.txt
// ============================================================

const PLAYBOOK_META = {
  title: "Comedy Playbook for Everyday Life",
  subtitle: "What to say, when to say it, and how not to accidentally become the joke"
};

const PLAYBOOK_CHAPTERS = [
  {
    id: 1,
    title: "The Core Rule of Everyday Comedy",
    icon: "🎭",
    color: "lime",
    intro: "Comedy is not just 'being funny.' It is social intelligence with timing. The best everyday comedy makes people feel lighter, included, seen, and safe. The worst comedy makes people feel trapped, embarrassed, attacked, or obligated to laugh.",
    sections: [
      {
        heading: "Comedy should usually do one of five things",
        items: [
          { label: "Release tension", example: "Wah, the silence here got better WiFi than my house." },
          { label: "Create connection", example: "You also pretend to understand the menu first before ordering the same thing?" },
          { label: "Make ordinary life feel playful", example: "Today I'm not late, I'm just giving everyone suspense." },
          { label: "Show humility", example: "I came prepared. Unfortunately, my brain did not." },
          { label: "Name what everyone is thinking without being cruel", example: "This meeting has reached the stage where even the laptop wants to resign." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Comedy Compass: Safe vs Risky",
    icon: "🧭",
    color: "blue",
    sections: [
      {
        heading: "Usually safe",
        table: [
          { type: "Self-deprecating", example: "I have the confidence of someone who has not checked their bank balance yet." },
          { type: "Observational", example: "Why does every family WhatsApp group have one person forwarding 'urgent' news from 2018?" },
          { type: "Situational", example: "This queue is not a queue anymore. It's a life decision." },
          { type: "Playful exaggeration", example: "I waited so long my phone entered a new generation." },
          { type: "Shared struggle", example: "Adulting is just saying 'next month better' every month." }
        ]
      },
      {
        heading: "Risky types",
        table: [
          { type: "Race, religion, ethnicity", why: "Can turn into stereotyping fast" },
          { type: "Body/looks", why: "Often lands as insult" },
          { type: "Accent mockery", why: "Feels classist or xenophobic" },
          { type: "Gender/marital status", why: "Can reinforce ugly stereotypes" },
          { type: "Income/class", why: "Can humiliate people" },
          { type: "Trauma/illness/death", why: "Only safe if very personal and invited" },
          { type: "Politics", why: "Depends heavily on audience" }
        ]
      },
      {
        heading: "The Rule",
        note: "Punch up, punch sideways, or punch yourself. Don't punch down.",
        explanation: "Meaning: joke about power, systems, yourself, universal problems — not people with less power, fewer choices, or social vulnerability."
      }
    ]
  },
  {
    id: 3,
    title: "The Everyday Comedy Formula",
    icon: "⚗️",
    color: "pink",
    sections: [
      {
        heading: "Formula A: Observation + Twist",
        lines: ["You know what's funny? Malaysians will complain about traffic for 45 minutes, then drive across town for food anyway."]
      },
      {
        heading: "Formula B: Truth + Exaggeration",
        lines: ["Singaporeans don't walk fast. They move like their calendar is chasing them."]
      },
      {
        heading: "Formula C: Fake Seriousness",
        lines: ["I don't gossip. I just do community-based information management."]
      },
      {
        heading: "Formula D: Reframe",
        lines: ["I'm not broke. I'm in my minimalist finance era."]
      },
      {
        heading: "Formula E: Callback",
        explanation: "Mention something funny from earlier again later.",
        example: "Earlier someone said they always order kopi peng. Later: 'Before we make any major decision, we need to consult the kopi peng department.' Callbacks make you seem naturally funny because they reward people for paying attention."
      }
    ]
  },
  {
    id: 4,
    title: "Everyday Lines for Common Situations",
    icon: "💬",
    color: "orange",
    sections: [
      {
        heading: "When you arrive late",
        lines: [
          "Sorry I'm late. I was on Malaysian time, but with international ambition.",
          "Sorry I'm late. My punctuality got rejected at ICA.",
          "Sorry I'm late. I had a small scheduling disagreement with reality.",
          "I came as fast as my life choices allowed.",
          "I'm not late. I'm just fashionably delayed."
        ]
      },
      {
        heading: "When the food arrives",
        lines: [
          "Okay, everyone act normal. The main character has arrived.",
          "This food looks like it understands me.",
          "I don't want to overreact, but this might solve three emotional issues.",
          "This one confirm worth the parking stress.",
          "If this is not good, I'm writing a strongly worded review in my heart."
        ]
      },
      {
        heading: "When someone asks 'How are you?'",
        lines: [
          "Surviving professionally, thriving emotionally on weekends only.",
          "Somewhere between 'I got this' and 'Google, help me.'",
          "Can lah. Not great, not tragic, just can.",
          "Still alive, still paying bills, so technically successful.",
          "Productive enough to be dangerous.",
          "I'm okay. My soul is just buffering."
        ]
      },
      {
        heading: "When the queue is long",
        lines: [
          "This queue has character development.",
          "By the time we reach, I might have matured as a person.",
          "This is not a queue. This is a social experiment.",
          "This queue longer than some government processes.",
          "This queue is so Singaporean it should have its own QR code."
        ]
      },
      {
        heading: "When the bill arrives",
        lines: [
          "Ah, the plot twist.",
          "This is where friendship becomes accounting.",
          "Everyone stay calm. The calculator will decide our fate.",
          "Okay, who ordered the expensive personality?",
          "I believe in equality, but not when someone ordered wagyu."
        ]
      },
      {
        heading: "When someone is quiet",
        lines: [
          "You're very peaceful today. Either you're wise or your battery is low.",
          "You're giving mysterious main character energy.",
          "You're quiet. Are you observing us for a documentary?",
          "No pressure to talk, but your facial reactions are already contributing to the group."
        ],
        warning: "Do not say 'Why so quiet?' — This can make shy people feel exposed."
      },
      {
        heading: "When someone talks too much",
        lines: [
          "I like how your thoughts come with unlimited data.",
          "Your brain has no loading screen.",
          "You don't tell stories, you release episodes.",
          "Bro, even Netflix asks 'Are you still watching?'"
        ],
        warning: "Use 'Bro, even Netflix...' only with close friends."
      },
      {
        heading: "When plans change",
        lines: [
          "No problem. I love chaos when it comes with updates.",
          "Okay, we pivot. Startup energy.",
          "This plan has entered its experimental phase.",
          "Can. We improvise. Like road signs in construction area."
        ]
      },
      {
        heading: "When technology fails",
        lines: [
          "The WiFi has chosen violence.",
          "My laptop is thinking about its future.",
          "Technology is amazing until it remembers it hates us.",
          "You froze at a very inspirational angle.",
          "Your audio sounds like it's calling from 2007."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Work & Office Comedy",
    icon: "💼",
    color: "purple",
    intro: "Office humour must be safer, cleaner, and less personal. The goal is to reduce tension without reducing professionalism.",
    sections: [
      {
        heading: "Before a meeting",
        lines: [
          "Let's begin before this meeting becomes a lifestyle.",
          "I'm ready. Emotionally? Separate question.",
          "Let's align, synergize, and then hopefully escape."
        ]
      },
      {
        heading: "During a long meeting",
        lines: [
          "I think we have entered the philosophical portion of the meeting.",
          "Can I clarify, are we solving the problem or becoming part of it?",
          "This topic has grown legs."
        ]
      },
      {
        heading: "When someone says 'quick call'",
        lines: ["Ah yes, the famous quick call. See you in 47 minutes."]
      },
      {
        heading: "When there are too many slides",
        lines: [
          "This deck has more chapters than my life.",
          "Slide 38 is where I started questioning my career choices."
        ]
      },
      {
        heading: "When deadlines are tight",
        lines: [
          "This timeline is ambitious in a spiritual way.",
          "We can do it. Sleep is a social construct.",
          "The deadline is not tight. It is hugging us."
        ]
      },
      {
        heading: "When your boss asks if it's possible",
        lines: [
          "Possible, yes. Comfortable, no.",
          "We can make it happen, but something else will need to become less magical.",
          "Yes, but we may need to sacrifice either scope, sleep, or sanity."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Family Comedy",
    icon: "👨‍👩‍👧‍👦",
    color: "yellow",
    intro: "Family humour must be careful because families have long memories and short forgiveness windows.",
    sections: [
      {
        heading: "When relatives ask about marriage",
        lines: [
          "I'm currently in a long-term relationship with personal development.",
          "Still under divine review.",
          "Waiting for the right person. Also waiting for myself to become the right person.",
          "I'm accepting applications, but the interview process is strict.",
          "Aunty, when got good candidate, you submit CV first."
        ]
      },
      {
        heading: "When relatives ask about salary",
        lines: [
          "Enough to survive, not enough to become arrogant.",
          "I'm rich in experience. Unfortunately, the landlord does not accept that.",
          "Can eat. Cannot retire."
        ]
      },
      {
        heading: "When relatives compare you to cousins",
        lines: [
          "Yes, they are very successful. I'm taking the scenic route.",
          "Every family needs diversity. They are the achievers. I am the plot twist."
        ]
      },
      {
        heading: "When parents nag",
        lines: [
          "This advice has been renewed for another season.",
          "I know you love me because the lecture comes with free food."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Friends & Social Group Lines",
    icon: "🫂",
    color: "lime",
    sections: [
      {
        heading: "When someone cancels plans",
        lines: [
          "No worries. I was emotionally prepared to go out but spiritually prepared to stay home.",
          "Cancel accepted. Friendship remains under review.",
          "It's okay. My bed has been asking for me."
        ]
      },
      {
        heading: "When someone is overdressed",
        lines: [
          "Wah, sorry, I didn't know we were meeting royalty.",
          "You dressed like you know something we don't.",
          "Main character arrived. Everyone adjust lighting."
        ]
      },
      {
        heading: "When someone is underdressed",
        lines: [
          "Comfort-first fashion. Respect.",
          "You came dressed for emotional stability."
        ]
      },
      {
        heading: "When someone gives good advice",
        lines: [
          "That was too wise. Please invoice me.",
          "You sound like you have healed and read terms and conditions."
        ]
      },
      {
        heading: "When someone gives bad advice",
        lines: [
          "That advice has confidence, but not evidence.",
          "I respect the courage, not the strategy."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Dating & Flirting Comedy",
    icon: "💘",
    color: "pink",
    intro: "Good flirting is playful, respectful, and leaves room for the other person to decline without awkwardness.",
    sections: [
      {
        heading: "The best flirting style",
        comparisons: [
          { bad: "You're hot.", better: "You have a very dangerous combination of good taste and good timing." },
          { bad: "Are you single?", better: "Before I accidentally become too charming, should I know if someone already has the job?" }
        ]
      },
      {
        heading: "Gentle pickup lines",
        lines: [
          "I was going to say something smooth, but then you smiled and now HR needs to investigate my brain.",
          "You seem like someone who has both good playlists and strong opinions.",
          "I don't know your coffee order, but I feel like it says something important about you.",
          "You have a face that makes people want to behave better.",
          "You seem like the type of person who makes ordinary places more interesting."
        ]
      },
      {
        heading: "Funny pickup lines",
        lines: [
          "Are you a parking spot in KL? Because finding you feels impossible and emotionally expensive.",
          "Are you ERP? Because every time I pass by you, I feel charged.",
          "Are you my Touch 'n Go balance? Because I keep checking if you're available.",
          "Are you a Singapore rental listing? Because you're rare, expensive, and everyone wants you.",
          "Are you nasi lemak? Because even when I say I'm trying to be healthy, I still choose you."
        ]
      },
      {
        heading: "Nerdy pickup lines",
        lines: [
          "Are you WiFi? Because I feel a strong connection, but I'm scared it might be unstable.",
          "Are you a spreadsheet? Because I want to spend time understanding your hidden formulas.",
          "Are you Google Maps? Because I was lost until you showed up.",
          "Are you a password? Because I feel like you need special characters."
        ]
      },
      {
        heading: "Christian-friendly pickup lines",
        lines: [
          "I was praying for wisdom, but I didn't expect God to test my focus like this.",
          "Are you in my Bible reading plan? Because I'd like to spend consistent time with you.",
          "I'm not saying this is providence, but the seating arrangement is suspicious.",
          "You seem like someone who loves God and also knows where to find good food. That's rare."
        ],
        warning: "Avoid: 'God told me you're my wife/husband.' That is not a pickup line. That is spiritual pressure."
      },
      {
        heading: "Respectful 'ask out' lines",
        lines: [
          "I enjoy talking to you. Would you be open to coffee sometime?",
          "No pressure, but I'd like to take you out properly.",
          "I'm curious about you in a way that feels worth a meal.",
          "Would you like to continue this conversation somewhere with better lighting and worse prices?"
        ]
      },
      {
        heading: "If they reject you",
        lines: [
          "Totally fair. I'll recover with dignity and maybe dessert.",
          "No worries at all. Thank you for being clear.",
          "Respect. I will now redirect my charm toward personal growth."
        ],
        warning: "Do not joke in a way that makes them comfort you. Avoid: 'Wow, I got rejected. Guess I'll die alone.' That pressures them emotionally."
      }
    ]
  },
  {
    id: 9,
    title: "Dad Jokes",
    icon: "👨",
    color: "orange",
    intro: "Dad jokes work because they are stupid with confidence.",
    sections: [
      {
        heading: "Classic everyday dad jokes",
        lines: [
          "I only know 25 letters of the alphabet. I don't know Y.",
          "I used to hate facial hair, but then it grew on me.",
          "I told my wife she should embrace her mistakes. She hugged me.",
          "I don't trust stairs. They're always up to something.",
          "I used to be addicted to soap, but I'm clean now.",
          "I ordered a chicken and an egg online. I'll let you know.",
          "I'm reading a book about anti-gravity. It's impossible to put down.",
          "I don't trust atoms. They make up everything.",
          "I asked my dog what two minus two is. He said nothing.",
          "I used to be a baker, but I couldn't make enough dough."
        ]
      },
      {
        heading: "Food dad jokes",
        lines: [
          "I'm on a seafood diet. I see food, and I eat it.",
          "This curry is so good, I'm having an emotional sambal moment.",
          "I tried to make a joke about nasi lemak, but it was too basic. Still delicious though.",
          "I don't want to taco 'bout it."
        ]
      },
      {
        heading: "Work dad jokes",
        lines: [
          "I have a joke about unemployment, but it doesn't work.",
          "I have a joke about construction, but I'm still working on it.",
          "I have a joke about meetings, but it could have been an email."
        ]
      },
      {
        heading: "Malaysia/Singapore dad jokes",
        lines: [
          "Why did the roti canai go to therapy? Too many layers.",
          "Why did the kopi feel tired? Too much pressure to be kaw.",
          "Why was the nasi lemak confident? Because it had sambal support.",
          "Why did the MRT break up with the bus? Too many connections.",
          "Why was the hawker stall so wise? Because it had wok experience."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Malaysian Comedy Section",
    icon: "🇲🇾",
    color: "blue",
    intro: "Malaysian humour often works through food, weather, traffic, bureaucracy, family, multilingual wordplay, and 'can lah' survival energy.",
    sections: [
      {
        heading: "Traffic",
        lines: [
          "KL traffic is not transportation. It's character formation.",
          "I left early, but the Federal Highway had other theology.",
          "Waze said 20 minutes. Waze also believes in miracles."
        ]
      },
      {
        heading: "Food",
        lines: [
          "In Malaysia, we don't ask 'how are you?' We ask 'makan already?' Same thing.",
          "The real national language is arguing where the best nasi lemak is.",
          "You know the food is good when the parking is illegal but everyone is calm."
        ]
      },
      {
        heading: "Weather",
        lines: [
          "Malaysia has two seasons: raining and about to rain.",
          "The weather today is air fryer mode.",
          "I showered, walked outside, and immediately became soup."
        ]
      },
      {
        heading: "Government/apps/bureaucracy",
        lines: [
          "Malaysia doesn't have digital transformation. We have app collection hobby.",
          "Every problem here has a form, a counter, and someone saying 'system down.'",
          "I have so many government apps, my phone is basically a ministry."
        ]
      },
      {
        heading: "Family",
        lines: [
          "Malaysian parents don't say 'I love you.' They say 'you eat already or not?'",
          "Aunty WhatsApp is faster than breaking news, but accuracy depends on the Holy Spirit."
        ]
      },
      {
        heading: "Money",
        lines: [
          "My salary enters the account and immediately becomes a tourist.",
          "Ringgit weak, but my appetite strong."
        ]
      },
      {
        heading: "Malaysian pickup lines",
        lines: [
          "Are you nasi lemak? Because even when I try to move on, I come back to you.",
          "Are you Touch 'n Go? Because my heart keeps trying to reload.",
          "Are you teh tarik? Because you've got me pulled in.",
          "Are you sambal? Because you make everything more exciting.",
          "Are you a parking spot in Bangsar? Because you're rare and everyone is fighting for you."
        ]
      },
      {
        heading: "Malaysian roasts among close friends",
        lines: [
          "You're not late. You're just aggressively Malaysian.",
          "Your plan got more changes than Malaysian road signs.",
          "You talk like a manifesto — many promises, unclear timeline.",
          "Your confidence is like KL parking: illegal but impressive."
        ],
        warning: "Use only if the friendship is strong."
      },
      {
        heading: "Manglish-style humour",
        lines: [
          "Can can, but whether wise or not, different story.",
          "This one not problem. This one adventure.",
          "I'm not lazy lah. I'm energy efficient.",
          "Don't worry. Panic first, solve later.",
          "Steady lah. We suffer together.",
          "This meeting very productive. We produced more meetings."
        ],
        warning: "Use naturally, not as forced performance."
      }
    ]
  },
  {
    id: 11,
    title: "Singapore Comedy Section",
    icon: "🇸🇬",
    color: "pink",
    intro: "Singapore humour often comes from efficiency, cost of living, rules, queues, kiasu culture, MRT life, BTO, ERP, COE, and 'can but expensive.'",
    sections: [
      {
        heading: "Cost of living",
        lines: [
          "In Singapore, even my dreams need budget approval.",
          "I breathed near Orchard and somehow spent $18.",
          "Dating in Singapore is expensive. Even feelings need GST."
        ]
      },
      {
        heading: "Work",
        lines: [
          "Singaporeans don't relax. We schedule recovery.",
          "My calendar has more control over my life than I do.",
          "I'm not stressed. I'm just highly optimized."
        ]
      },
      {
        heading: "MRT",
        lines: [
          "The MRT is where Singaporeans practice emotional neutrality.",
          "You know life is hard when even the train says 'do not lean.'",
          "Peak hour MRT is a trust exercise with strangers."
        ]
      },
      {
        heading: "BTO/Housing",
        lines: [
          "In Singapore, proposing is easy. The real commitment is applying for BTO.",
          "Love is patient, love is kind, love waits four years for keys.",
          "Relationship status: waiting for ballot result."
        ]
      },
      {
        heading: "Kiasu",
        lines: [
          "I'm not kiasu. I'm pre-disappointed and preparing.",
          "Singaporeans queue first, ask later.",
          "If there's a free gift, suddenly everyone has time."
        ]
      },
      {
        heading: "Singapore pickup lines",
        lines: [
          "Are you a BTO queue number? Because I've been praying for you.",
          "Are you an MRT seat during peak hour? Because finding you feels like grace.",
          "Are you GST? Because you've increased my interest.",
          "Are you Jewel Changi? Because you make me want to arrive early.",
          "Are you my CPF? Because I'm thinking long-term."
        ]
      },
      {
        heading: "Singlish-style humour",
        lines: [
          "Can is can. But why like that?",
          "This one not stress. This one premium stress.",
          "Don't say bojio. I emotionally invited you.",
          "I'm not complaining. I'm giving national feedback.",
          "Steady lah. We suffer efficiently.",
          "This meeting quite value-for-money. One hour feel like three."
        ]
      }
    ]
  },
  {
    id: 12,
    title: "ASEAN Comedy Section",
    icon: "🌏",
    color: "purple",
    intro: "ASEAN humour works best when it celebrates shared experiences without reducing countries to stereotypes. The safest route: joke about heat, food obsession, traffic, family, bureaucracy, aunties/uncles, and regional chaos.",
    sections: [
      {
        heading: "ASEAN shared experience lines",
        lines: [
          "In Southeast Asia, 'nearby' can mean five minutes or one emotional journey.",
          "Our region has two universal languages: food and complaining about traffic.",
          "ASEAN unity is everyone agreeing that their country has the best food.",
          "Southeast Asian weather is just soup with infrastructure.",
          "Every ASEAN family has one aunty who knows everything before the government announces it."
        ]
      },
      {
        heading: "Indonesia-flavoured humour",
        lines: [
          "Jakarta traffic doesn't delay you. It gives you time to rethink your life.",
          "Indonesia has so many islands, even Google Maps needs emotional support.",
          "The food is so good that dieting becomes a theoretical concept."
        ]
      },
      {
        heading: "Thailand-flavoured humour",
        lines: [
          "Thailand is dangerous because you go for holiday and return with ten new favourite foods.",
          "Thai spice doesn't ask if you're ready. It introduces you to your ancestors.",
          "Bangkok traffic teaches patience better than meditation apps."
        ]
      },
      {
        heading: "Philippines-flavoured humour",
        lines: [
          "Filipinos don't just sing karaoke. They enter a different spiritual dimension.",
          "A Filipino party starts at 7, which means emotionally 9.",
          "In the Philippines, one person brings food and suddenly it becomes a family reunion."
        ]
      },
      {
        heading: "Vietnam-flavoured humour",
        lines: [
          "Crossing the road in Vietnam is not walking. It's faith with footwork.",
          "Vietnamese coffee doesn't wake you up. It negotiates with your soul.",
          "The scooter traffic looks chaotic, but somehow it has better teamwork than most offices."
        ]
      },
      {
        heading: "Brunei-flavoured humour",
        lines: [
          "Brunei is what happens when a country chooses peace, quiet, and early nights.",
          "Brunei energy is: calm, clean, and somehow already home by 9."
        ]
      },
      {
        heading: "Cambodia/Laos/Myanmar (safer lines)",
        lines: [
          "Some places remind you that life doesn't need to be loud to be meaningful.",
          "The best travel moments are usually not the landmarks, but the aunties feeding you like you're underweight."
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Culture-Specific Comedy: What Works and What Fails",
    icon: "🎯",
    color: "orange",
    sections: [
      {
        heading: "Malaysia — Works",
        items: ["Food jokes", "Traffic jokes", "Weather jokes", "Family pressure jokes", "Government app jokes", "'Can lah' humour", "Multilingual casual banter"]
      },
      {
        heading: "Malaysia — Avoid",
        items: ["Ethnic stereotypes", "Religion mockery", "East Malaysia as an afterthought", "'All Malaysians are lazy/corrupt/backward' type jokes"]
      },
      {
        heading: "Singapore — Works",
        items: ["Cost-of-living jokes", "BTO/CPF/ERP/MRT jokes", "Kiasu jokes", "Efficiency jokes", "Queue jokes", "Work stress jokes"]
      },
      {
        heading: "Singapore — Avoid",
        items: ["Mocking foreigners/workers", "Class jokes about HDB/private housing", "Race/religion jokes", "Mental health jokes in high-pressure settings"]
      },
      {
        heading: "ASEAN — Works",
        items: ["Shared heat/weather", "Food pride", "Traffic", "Family", "Travel chaos", "Regional friendliness"]
      },
      {
        heading: "ASEAN — Avoid",
        items: ["'Poor country' jokes", "Political oppression jokes unless serious context", "Accent mockery", "Sex tourism references", "Comparing countries in a humiliating way"]
      }
    ]
  },
  {
    id: 14,
    title: "Pickup Lines by Personality Type",
    icon: "💫",
    color: "lime",
    sections: [
      {
        heading: "Sweet",
        lines: [
          "You make the room feel easier to be in.",
          "Talking to you feels like the part of the day I'd want to replay.",
          "You have the kind of presence that makes people soften."
        ]
      },
      {
        heading: "Confident",
        lines: [
          "I like your energy. I'd like to know the person behind it.",
          "I was going to play it cool, but I think honesty is more attractive.",
          "You seem worth being brave for."
        ]
      },
      {
        heading: "Funny",
        lines: [
          "I'm not saying we're a power couple, but our food-ordering potential seems strong.",
          "You look like someone who would judge my playlist fairly but firmly.",
          "I think we should test our compatibility over overpriced coffee."
        ]
      },
      {
        heading: "Deep",
        lines: [
          "You seem like someone with a story, not just a profile.",
          "I like people who notice things. You seem like one of them.",
          "You give the impression of someone who has lived, learned, and still stayed kind."
        ]
      },
      {
        heading: "Light and playful",
        lines: [
          "Important question: are you more coffee, tea, or emotionally dependent on both?",
          "Before I decide how charming to be, what's your stance on dessert?",
          "You seem dangerous. Not legally, just emotionally memorable."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Lines for Awkward Silence",
    icon: "🤫",
    color: "blue",
    sections: [
      {
        heading: "What to say",
        lines: [
          "This silence is very premium. Usually people pay for this kind of peace.",
          "I like that we're comfortable enough to let the WiFi speak.",
          "Okay, I'll rescue us. Would you rather fight one giant mosquito or 100 tiny lizards?",
          "This is the part where extroverts usually panic.",
          "No worries, silence is just conversation taking a water break."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Conversation Starters With Comedy",
    icon: "🗣️",
    color: "purple",
    sections: [
      {
        heading: "Light",
        lines: [
          "What's a small thing that makes you irrationally happy?",
          "What food do you defend like it's your family name?",
          "What's your most uncle/aunty behaviour?",
          "What app do you open when you have no purpose?"
        ]
      },
      {
        heading: "Deeper but still funny",
        lines: [
          "What's one thing you used to judge people for, but now you understand?",
          "What's your toxic trait that is also kind of useful?",
          "What's something you're healing from but can now joke about lightly?",
          "What life lesson did you learn the expensive way?"
        ]
      },
      {
        heading: "Malaysia/Singapore/ASEAN",
        lines: [
          "What's the most Malaysian/Singaporean thing about you?",
          "What food opinion could get you cancelled by your friends?",
          "What's your family's most dramatic WhatsApp group moment?",
          "What's one thing your country does that is annoying but lovable?"
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Roast Playbook",
    icon: "🔥",
    color: "orange",
    intro: "Roasting is advanced comedy. It only works when affection is obvious.",
    sections: [
      {
        heading: "Safe roast formula: Compliment + tease + warmth",
        lines: [
          "You're very organized. Slightly terrifying, but honestly useful.",
          "You're the kind of person who says 'quick question' and changes someone's whole afternoon. But we need you.",
          "You dress like your calendar has investors."
        ]
      },
      {
        heading: "Close-friend roast lines",
        lines: [
          "Your confidence is inspiring, especially considering the evidence.",
          "You have main character energy, but sometimes the script is missing.",
          "You're not dramatic. You're just emotionally IMAX.",
          "You give advice like a TED Talk, then make the same mistake next week.",
          "You have the energy of someone who says 'trust me' before a disaster."
        ]
      },
      {
        heading: "When NOT to roast",
        doNotRoast: ["New to the group", "Lower status than you", "Already embarrassed", "Sensitive about the topic", "Quiet or socially anxious", "Your employee or junior", "From a marginalized group on that specific trait"]
      }
    ]
  },
  {
    id: 18,
    title: "Self-Deprecating Lines",
    icon: "🪞",
    color: "pink",
    intro: "Self-deprecation works when it shows humility, not self-hatred.",
    sections: [
      {
        heading: "Good self-deprecation",
        lines: [
          "I'm not saying I'm tired, but my soul just asked for annual leave.",
          "I'm very organized in theory.",
          "I have two moods: ambitious and need snack.",
          "I'm not bad with directions. I just create unexpected journeys.",
          "My brain has many tabs open, and one is playing music.",
          "I am currently under construction, but the location is still open."
        ]
      },
      {
        heading: "Too heavy — avoid these",
        lines: ["I'm useless.", "I hate myself.", "No one likes me anyway."],
        warning: "That stops being comedy and becomes emotional labour for the listener."
      }
    ]
  },
  {
    id: 19,
    title: "Comedy for Difficult Moments",
    icon: "🌧️",
    color: "blue",
    sections: [
      {
        heading: "When someone is stressed",
        lines: [
          "Okay, first we breathe. Then we fight the dragon.",
          "This is stressful, but not stronger than us.",
          "Let's reduce the problem from monster to spreadsheet."
        ]
      },
      {
        heading: "When plans fail",
        lines: [
          "Good news: we now have a story.",
          "This is not failure. This is content.",
          "We are not lost. We are gathering data."
        ]
      },
      {
        heading: "When someone makes a mistake",
        lines: [
          "Congratulations, you are human. Very on-brand.",
          "No worries. Mistakes are just experience with worse lighting.",
          "We recover. We rebrand. We move."
        ]
      },
      {
        heading: "When you make a mistake",
        lines: [
          "That was my mistake. I will now pretend it was character development.",
          "I accept responsibility and also blame Monday.",
          "I have learned, grown, and will now avoid eye contact briefly."
        ]
      }
    ]
  },
  {
    id: 20,
    title: "Comedy in Public Speaking",
    icon: "🎤",
    color: "lime",
    sections: [
      {
        heading: "Opening lines",
        lines: [
          "Thanks for being here. I know everyone has many options, including pretending to check email.",
          "I'll keep this useful, because attention spans are expensive now.",
          "My goal today is simple: make this clearer than your last group chat argument."
        ]
      },
      {
        heading: "When slides fail",
        lines: [
          "The slides are taking a moment to emotionally arrive.",
          "Technology is reminding us who is really in charge.",
          "While the laptop thinks, let me prove I know this without visual aid."
        ]
      },
      {
        heading: "When audience is quiet",
        lines: [
          "That response was very Singaporean: efficient but emotionally conservative.",
          "I appreciate the silent support. Very mysterious, very powerful.",
          "I'll take your silence as deep reflection and not judgment."
        ]
      },
      {
        heading: "Closing",
        lines: [
          "Thank you. You've been a wonderful audience, especially those who stayed spiritually present.",
          "That's all from me. May your meetings be short and your food arrive hot."
        ]
      }
    ]
  },
  {
    id: 21,
    title: "Comedy for Texting",
    icon: "📱",
    color: "yellow",
    intro: "Texting comedy needs rhythm. Don't over-explain.",
    sections: [
      {
        heading: "Good short lines",
        lines: [
          "I support this nonsense.",
          "This has potential for chaos. I'm listening.",
          "Emotionally, I am seated.",
          "I fear you are correct.",
          "This is why we need adult supervision.",
          "Unfortunately, we are the adults.",
          "I laughed louder than my dignity allowed."
        ]
      },
      {
        heading: "Flirty texting",
        lines: [
          "You're becoming suspiciously fun to talk to.",
          "I was going to reply normally, but then I remembered I'm trying to be charming.",
          "You have no business being this interesting on a weekday.",
          "Careful. Consistency is attractive."
        ]
      },
      {
        heading: "Group chat lines",
        lines: [
          "I leave for 10 minutes and the group becomes Parliament.",
          "Can someone summarize this drama in bullet points?",
          "I support peace, but I also need screenshots.",
          "This group chat has no agenda but strong momentum."
        ]
      }
    ]
  },
  {
    id: 22,
    title: "Comedy for Social Media Captions",
    icon: "📸",
    color: "pink",
    sections: [
      {
        heading: "Everyday life",
        lines: [
          "Trying my best, but my best keeps asking for coffee.",
          "Currently accepting blessings, discounts, and emotional stability.",
          "Low budget, high drama.",
          "Romanticizing life because the cost of living is attacking me."
        ]
      },
      {
        heading: "Food",
        lines: [
          "Healing, but make it spicy.",
          "This meal fixed things therapy hasn't reached yet.",
          "I came, I saw, I ordered extra."
        ]
      },
      {
        heading: "Travel",
        lines: [
          "Lost but aesthetically.",
          "Out of office, into delusion.",
          "Collecting memories and questionable expenses."
        ]
      },
      {
        heading: "Work",
        lines: [
          "Professional on paper, confused in practice.",
          "Another day, another calendar invite.",
          "Powered by deadlines and mild panic."
        ]
      }
    ]
  },
  {
    id: 23,
    title: "Comedy Games for Groups",
    icon: "🎮",
    color: "purple",
    sections: [
      {
        heading: "Game 1: Wrong Answers Only",
        prompt: "What is the real reason Malaysians/Singaporeans love queues?",
        answers: [
          "Because standing builds national unity.",
          "Because the queue might lead to food.",
          "Because if other people queue, confirm got value."
        ]
      },
      {
        heading: "Game 2: Explain Badly",
        examples: [
          { prompt: "Explain dating badly.", answer: "Two people slowly discovering whether their childhood wounds are compatible." },
          { prompt: "Explain office meetings badly.", answer: "A ritual where humans gather to create more rituals." }
        ]
      },
      {
        heading: "Game 3: ASEAN Food Court Debate",
        prompt: "Which food would win in a diplomatic crisis?",
        options: ["Nasi lemak", "Chicken rice", "Pad thai", "Pho", "Rendang", "Adobo", "Satay"],
        rule: "Everyone must defend their answer like a minister."
      },
      {
        heading: "Game 4: Most Uncle/Aunty Thing You Do",
        examples: [
          "I keep plastic bags inside plastic bags.",
          "I judge restaurants by parking.",
          "I say 'last time ah' before giving advice.",
          "I complain about prices but still buy."
        ]
      }
    ]
  },
  {
    id: 24,
    title: "Comedy by Environment",
    icon: "🏙️",
    color: "lime",
    sections: [
      {
        heading: "At a café",
        lines: [
          "This coffee tastes like it has seen my calendar.",
          "I came here to work, but the ambience convinced me to become reflective.",
          "This place is so aesthetic I feel underdressed emotionally."
        ]
      },
      {
        heading: "At the gym",
        lines: [
          "I'm not training. I'm negotiating with gravity.",
          "Today's workout is sponsored by regret.",
          "I came for fitness but stayed for survival."
        ]
      },
      {
        heading: "At church",
        lines: [
          "The sermon hit so hard I avoided eye contact with God.",
          "Worship was powerful. My voice was not, but my heart participated.",
          "Fellowship is just holy networking with snacks."
        ],
        note: "Keep reverent, not mocking."
      },
      {
        heading: "At weddings",
        lines: [
          "Beautiful wedding. Very dangerous for single people's relatives.",
          "The couple looks happy. The singles look monitored.",
          "Love is in the air, and so are questions from aunties."
        ]
      },
      {
        heading: "At airports",
        lines: [
          "Airport version of me believes in planning, hydration, and spending money unnecessarily.",
          "Nothing makes me feel rich and poor at the same time like airport food.",
          "The departure gate is where everyone becomes philosophical."
        ]
      }
    ]
  },
  {
    id: 25,
    title: "Advanced Comedy: How to Think Funny",
    icon: "🧠",
    color: "blue",
    sections: [
      {
        heading: "Notice contradictions",
        examples: [
          "People want healthy food but order extra sauce.",
          "Everyone hates meetings but schedules more meetings.",
          "People say 'no drama' but follow every drama update.",
          "Malaysians complain about traffic but drive far for food.",
          "Singaporeans complain about queues but join them if they look promising."
        ],
        line: "We say we want peace, but the moment there's drama, suddenly everyone has PhD in investigation."
      },
      {
        heading: "Notice rituals",
        lines: [
          "Every office has one person who says 'let's take this offline' and somehow creates more online work.",
          "Every family gathering has three phases: eating, interrogation, unsolicited advice."
        ]
      },
      {
        heading: "Notice polite lies",
        lines: [
          "When people say 'interesting,' it can mean anything from 'genius' to 'please stop.'",
          "When someone says 'no worries,' sometimes there are definitely worries.",
          "When a Malaysian says 'on the way,' we need to ask spiritually or physically?"
        ]
      },
      {
        heading: "Notice modern absurdities",
        lines: [
          "We have smart homes, smart watches, smart cars, but still need seven reminders to drink water.",
          "We can video call across continents, but nobody knows how to end a Zoom meeting gracefully."
        ]
      }
    ]
  },
  {
    id: 26,
    title: "Comedy Ethics: Don't Be 'Funny' at People's Expense",
    icon: "⚖️",
    color: "orange",
    sections: [
      {
        heading: "Before saying a joke, ask:",
        items: [
          "Is this person likely to feel included or exposed?",
          "Am I joking about something they can control?",
          "Is the power dynamic equal?",
          "Would I say this if their family/boss/partner was here?",
          "Is the joke actually funny, or just mean with timing?"
        ]
      },
      {
        heading: "Good comedy says",
        line: "Life is ridiculous, and we're in it together."
      },
      {
        heading: "Bad comedy says",
        line: "You are ridiculous, and we are laughing at you."
      },
      {
        heading: "In-group roasting note",
        note: "In-group roasting is different. When someone makes a joke about their own community — their own race, religion, disability, background — they are often reclaiming territory, not opening the door for outsiders. The test: if you are not from that group, the joke probably isn't yours to repeat, even if the original person said it first. Enjoy it. Don't borrow it."
      }
    ]
  },
  {
    id: 27,
    title: "Emergency Line Bank",
    icon: "🚨",
    color: "pink",
    intro: "Use these when you need something funny quickly.",
    sections: [
      {
        heading: "When confused",
        lines: [
          "I understand some of these words individually.",
          "My brain has entered read-only mode.",
          "Can you explain it again, but for someone whose soul left halfway?"
        ]
      },
      {
        heading: "When impressed",
        lines: [
          "That was impressive. I need to upgrade my personality.",
          "You did not have to be that competent in public.",
          "That was so good I briefly believed in excellence again."
        ]
      },
      {
        heading: "When tired",
        lines: [
          "I'm awake, but not legally.",
          "My body is here. My spirit is applying for leave.",
          "I'm operating on low battery and social responsibility."
        ]
      },
      {
        heading: "When hungry",
        lines: [
          "I'm one bad decision away from ordering everything.",
          "My patience is directly linked to blood sugar.",
          "Let's eat before my personality changes."
        ]
      },
      {
        heading: "When broke",
        lines: [
          "I'm not broke. I'm financially minimalist.",
          "My wallet is in silent retreat.",
          "I checked my bank account and became humble."
        ]
      }
    ]
  },
  {
    id: 28,
    title: "The Best All-Purpose Lines",
    icon: "✨",
    color: "purple",
    intro: "These work almost anywhere.",
    sections: [
      {
        heading: "All-purpose lines",
        lines: [
          "This has become more dramatic than expected.",
          "I support this journey, but I have questions.",
          "That sounds illegal but emotionally correct.",
          "I respect the confidence.",
          "We are learning. Against our will, but still.",
          "This is not ideal, but it is memorable.",
          "The vibes are unstable, but promising.",
          "Let's not panic until we have data.",
          "That was a choice. A bold one.",
          "I'm not judging. I'm collecting evidence."
        ]
      }
    ]
  },
  {
    id: 29,
    title: "How to Deliver Comedy Well",
    icon: "🎬",
    color: "lime",
    sections: [
      {
        heading: "Timing",
        note: "Pause before the punchline.",
        example: "'I came prepared…' [pause] 'Unfortunately, not mentally.'"
      },
      {
        heading: "Tone",
        note: "Say absurd things seriously.",
        example: "'This queue has become part of my identity.'"
      },
      {
        heading: "Face",
        note: "Don't laugh too hard at your own joke. Smile slightly and let others catch it."
      },
      {
        heading: "Confidence",
        comparisons: [
          { bad: "This is probably not funny but…", better: "I have a theory…" }
        ]
      },
      {
        heading: "Recovery",
        lines: [
          "That joke was for me. Thank you for witnessing it.",
          "Okay, that one is still in beta.",
          "I'll workshop it and come back stronger."
        ]
      }
    ]
  },
  {
    id: 30,
    title: "Bottom Line",
    icon: "🏁",
    color: "orange",
    sections: [
      {
        heading: "The essence of everyday comedy",
        note: "Everyday comedy is not about becoming a clown. It is about becoming someone who can lighten a room without lowering anyone's dignity. The best lines are simple, specific, kind, and well-timed.",
        closing: "Use comedy to say: 'Life is hard, people are weird, systems are absurd, but we can still laugh together.'"
      }
    ]
  }
];

// ============================================================
// C1.TXT — FLIRTY TEXTS (67 EXAMPLES, 8 STRATEGIES)
// ============================================================
const FLIRTY_TEXTS = {
  title: "Flirty Texts for Him and Her: 67 Flirty Text Examples to Try",
  intro: "There's no one-size-fits-all method for flirty texts. The message depends on your strategy and approach. Below are 67 flirty text examples categorized into eight strategies to inspire you.",
  strategies: [
    {
      number: 1,
      title: "Ask a Cheeky Question",
      desc: "Cheeky questions are great for kickstarting a flirty conversation.",
      items: [
        "Want to hear a secret?",
        "Why are you so cute?",
        "Do you miss me? Type \"Y\" for yes.",
        "In the mood to have some fun?",
        "Do you like it when someone makes the first move?",
        "Our first kiss is going to be epic, don't you think?",
        "What would you say if I asked you to come over?",
        "Which emoji makes you think of me?",
        "Have I told you that I want to kiss you today? Because I seriously want to kiss you.",
        "I like you. What are you going to do about it?",
        "Want to have this conversation in person?"
      ]
    },
    {
      number: 2,
      title: "Be Bold About How Much You Like Them",
      desc: "Being upfront about your feelings can be a clear sign of interest.",
      items: [
        "I'm not big on the whole \"wait three days\" thing, so I'm texting you now.",
        "Seeing your name pop up on my phone screen makes me grin like an idiot.",
        "I don't have anything interesting to tell you, but I really wanted to talk to you.",
        "You're pretty freaking great!",
        "Everything makes me think of you.",
        "You're pretty much my dream guy.",
        "You never fail to give me butterflies.",
        "The more time I spend with you, the more I want to KEEP spending time with you!",
        "Even when I'm with you, I can't seem to get close enough to you.",
        "I've been dreaming of you even when I'm wide awake.",
        "You've been on my mind a lot today. And it's only 8:30 am.",
        "I can't sleep. I blame you.",
        "You make my heart happy!"
      ]
    },
    {
      number: 3,
      title: "Talk About the Last Time You Were Together",
      desc: "Remind them of shared moments to keep the vibe flirty and memorable.",
      items: [
        "Our last date was really fun. I can't remember the last time I had that much fun.",
        "It's impossible to get any work done today because I can't stop thinking about our night together.",
        "You looked really cute last night.",
        "I keep thinking about how good you looked the last time we were together.",
        "I hope my roommate's out tonight so we can have a night just as good as last night.",
        "I was dreaming about our day yesterday all day at work."
      ]
    },
    {
      number: 4,
      title: "Mention the Next Time You'll Be Together",
      desc: "Build anticipation by talking about future plans.",
      items: [
        "I wish you were here next to me right now.",
        "What does your week look like? Any room for me?",
        "We should probably go on another date soon.",
        "You'll love the outfit I'm going to wear tonight.",
        "If you want to make a move, today would be the perfect time to go for it."
      ]
    },
    {
      number: 5,
      title: "Make Use of Emojis",
      desc: "Emojis can clarify your intentions and add a playful touch.",
      items: [
        "🍔, 🍕, or 🌮 tonight?",
        "Surprise! I got you flowers: 💐",
        "I'm getting off work early tonight…👀",
        "🏢 ➡️ 🍻",
        "I had a really great time last night. 🙈",
        "Me when I get a text from you: 😍",
        "You're 🍯 with a side of 🔥."
      ]
    },
    {
      number: 6,
      title: "Make Plans",
      desc: "Take the lead by suggesting plans to build excitement.",
      items: [
        "Do you have any plans for this weekend? Because I don't. Let's make some.",
        "This is me asking you out. Want to get coffee on Saturday?",
        "Let's have drinks after work tomorrow.",
        "Any lunch plans today? Thought I could swing by and we could eat together!",
        "I'm craving sushi. We should get some for dinner this week.",
        "I've been wanting to see [insert movie name here]. Want to see it together?",
        "Let's go on an adventure together. Want to try a new hike this weekend?"
      ]
    },
    {
      number: 7,
      title: "If You're Ready for It, Get a Little Naughty",
      desc: "Subtle, seductive messages can spice things up if the vibe is right.",
      items: [
        "I'm not wearing any underwear right now. Just saying.",
        "I can't wait to be alone with you again.",
        "If you send me a sexy selfie, I might send one back.",
        "If you kiss my neck, I'll do anything you say. Knowledge is power, so use it wisely.",
        "Just wanted to let you know that I just got out of the shower.",
        "I had a dream we were sexting. It was so good that I woke up and decided to turn it into a reality.",
        "This text entitles you to one kiss on the body part of your choice. Choose wisely…",
        "My thoughts of you are particularly R-rated today.",
        "Just thinking about all the things we could do if we were back at my place right now.",
        "I can't wait to be by your side again. Or on top, if you prefer.",
        "I am sooo hungry right now…thing is…I don't want food."
      ]
    },
    {
      number: 8,
      title: "Speak Your Mind",
      desc: "Honesty and transparency can be romantic and sexy.",
      items: [
        "This song I was just listening to really reminds me of you.",
        "I was talking about you the other day.",
        "I'm using my last 2% of battery to text you that I'm thinking about you.",
        "You look so good right now. I can't actually see you, but I assume you look good because you always do.",
        "Hey! Stop thinking about me so much!",
        "I had a lovely dream about you last night.",
        "Everything about you makes me smile."
      ]
    }
  ],
  tips: [
    "Use this guide as a starting point for flirty texts.",
    "Experiment with different strategies to find what sparks the best vibe.",
    "Try the examples word-for-word or draw inspiration for your own messages.",
    "Relax, have fun, and take your flirty texting game to the next level!"
  ]
};

// ============================================================
// C2.TXT — FLIRTY MESSAGES FOR HER
// ============================================================
const FLIRTY_MESSAGES = {
  categories: [
    {
      id: "sweet",
      title: "Sweet Flirty Messages to Warm Her Heart",
      items: [
        "I can't help but smile whenever I think about you.",
        "You brighten up my day every time I see your name pop up on my phone.",
        "If I could rearrange the alphabet, I'd put U and I together.",
        "Every moment with you is like a beautiful dream I never want to wake from.",
        "You must be a magician because whenever you're around, everything else disappears.",
        "I find myself falling for you more and more every day.",
        "Your smile is the best part of my day.",
        "I'm addicted to the way you make me feel.",
        "When I see you, I know what happiness truly means.",
        "Just the thought of you gives me butterflies.",
        "I feel like the luckiest person in the world to have you in my life.",
        "Do you know how amazing you are? Because I do.",
        "Your happiness is the most beautiful thing in the world to me.",
        "I can't get enough of our little moments together.",
        "You make everything better just by being around.",
        "I'm so grateful for every moment we share.",
        "You're the reason I look forward to tomorrow.",
        "You have a way of making my heart smile.",
        "Every love song makes me think of you.",
        "Having you in my life is like a dream come true."
      ]
    },
    {
      id: "romantic",
      title: "Romantic Messages to Make Her Feel Special",
      items: [
        "You are the reason my heart beats faster every time I hear your name.",
        "I never knew what love was until I met you.",
        "You make every day feel like Valentine's Day.",
        "When I'm with you, I feel like I've found my other half.",
        "Your love is the most precious gift I've ever received.",
        "You complete me in every way possible.",
        "I can't imagine my life without you in it.",
        "Every moment spent with you is a moment I treasure.",
        "You are the queen of my heart.",
        "Being with you feels like magic.",
        "Your love is my greatest treasure.",
        "I'm so lucky to have you as my girl.",
        "I fall in love with you more deeply every single day.",
        "You are my one and only.",
        "You're the most beautiful chapter in my life.",
        "Your love is the light that guides me through dark times.",
        "I want to spend forever making you feel loved.",
        "My heart beats for you alone.",
        "You are my greatest adventure.",
        "Loving you is the best decision I've ever made."
      ]
    },
    {
      id: "spicy",
      title: "Spicy Flirty Messages for Her",
      items: [
        "I can't wait to feel your touch again.",
        "You've been running through my mind all day, and it's driving me wild.",
        "Thinking about you makes me a little bit naughty.",
        "You have the most kissable lips I've ever known.",
        "I love imagining what our next kiss will be like.",
        "What are you wearing right now? Because I can't stop thinking about it.",
        "I wish I could be there to hold you tight tonight.",
        "You always know how to get my heart racing.",
        "I love the way you tease me.",
        "I can't get enough of your touch.",
        "Your body is perfection, and I can't wait to explore every inch of it.",
        "You're the only one who can satisfy my craving.",
        "I'm counting the seconds until I can kiss you again.",
        "I want to feel your skin against mine.",
        "I can't stop thinking about the way you look at me.",
        "You make my heart race and my mind wander.",
        "I dream about your touch every night.",
        "Your whispers drive me wild.",
        "I love the way you look at me when you're feeling frisky.",
        "I'm addicted to your kisses and I need a fix."
      ]
    },
    {
      id: "witty",
      title: "Witty Flirty Messages for Her",
      items: [
        "Do you have a map? Because I keep getting lost in your eyes.",
        "You must be made of copper and tellurium because you're Cu-Te.",
        "Are you a magician? Because whenever I look at you, everyone else disappears.",
        "If you were a vegetable, you'd be a cute-cumber.",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
        "Is it just me, or did it just get a lot hotter in here?",
        "Are you a time traveler? Because I can see you in my future.",
        "I must be a snowflake because I've fallen for you.",
        "Do you believe in love at first sight, or should I walk by again?",
        "If we were at home, cuddling on a rainy Sunday morning, what would we have for breakfast? a) Pancakes b) Bacon and eggs c) Crèpes d) Acai bowl e) An argument f) Simply stay in bed.",
        "Is it okay if I follow you home? Because my parents always told me to follow my dreams.",
        "Do you happen to have a pencil? Cause I want to erase your past and write our future.",
        "Do you believe in fate? Because I think we've just had a 'meet-cute.'",
        "I'm not a photographer, but I can picture us together.",
        "You must be tired because you've been running through my mind all day.",
        "If looks could kill, you'd be a weapon of mass destruction.",
        "Are you made of Stardust? Because you're out of this world.",
        "If beauty were a crime, you'd be serving a life sentence.",
        "Can you lend me a kiss? I promise I'll give it back.",
        "Do you like Star Wars? Because Yoda one for me."
      ]
    }
  ]
};

// ============================================================
// C3.TXT — LUXURIOUSLY RIDICULOUS GOOD MORNING MESSAGES
// ============================================================
const GOOD_MORNING = {
  title: "Luxuriously Ridiculous Good Morning Messages",
  categories: [
    {
      label: "Over-the-top formal",
      items: [
        "Good morning, darling. I hope you find the investment of your sleep hours has yielded exceptional returns in rest and rejuvenation ✨",
        "Morning, love. I'd like to present you with an exclusive opportunity: a spectacular day, available only today, curated specifically for you 💎"
      ]
    },
    {
      label: "Amusingly elevated",
      items: [
        "Good morning, gorgeous. The total investment required for today's happiness? Simply your beautiful smile. Consider this my formal proposal 🌅",
        "Morning! I'm pleased to assist you in acquiring the finest day available in our current collection ☕👑"
      ]
    },
    {
      label: "Playfully sophisticated",
      items: [
        "Good morning, my dear. What investment level of coffee are you considering this morning? Premium espresso or the ultra-exclusive 'still in bed' collection? 😏",
        "Morning beautiful! I have an area of concern: you're not in my arms right now. Shall we address this matter immediately? 💫"
      ]
    },
    {
      label: "Peak absurdity",
      items: [
        "Good morning. I'd like to discuss the paperwork for owning this fabulous day together. Initial investment: one good morning kiss 😘✨",
        "Morning love! Our exclusive collection of 'Sunday morning vibes' is now available. May I help you secure a piece? 🥐👑"
      ]
    },
    {
      label: "Favorite combo (sweet + ridiculous)",
      items: [
        "Good morning, gorgeous! I'm delighted to inform you that you've been pre-approved for unlimited hugs, exclusive access to my heart, and a day filled with exceptional moments. The investment? Just being you 💛✨"
      ]
    }
  ],
  numbered: [
    { num: 1, label: "The Exclusive Offer", text: "Good morning, my love! I'm pleased to present you with an exclusive opportunity available only to preferred clients: a day crafted entirely around your happiness. This limited collection won't last long ✨☕" },
    { num: 2, label: "The Investment Advisor", text: "Morning gorgeous! As your personal joy consultant, I recommend a strategic investment in pancakes, followed by aggressive acquisition of couch cuddles. Returns guaranteed 💎🥞" },
    { num: 3, label: "The Sophisticated Concern", text: "Good morning, darling. I have several areas of consideration this morning: 1) You're too far away 2) Coffee levels suboptimal 3) Immediate hug deficiency detected 😘✨" },
    { num: 4, label: "The Premium Collection", text: "Morning beautiful! Today's curated collection features: golden sunshine, artisanal birdsong, and one boyfriend who thinks you're absolutely extraordinary 🌅👑" },
    { num: 5, label: "The Paperwork Specialist", text: "Good morning, love! Please review the agreement for today: I provide endless affection, you provide that stunning smile. Sign here: _____ 💫😄" },
    { num: 6, label: "The Exclusive Access", text: "Morning gorgeous! You now have VIP access to: my terrible jokes, unlimited compliments, and the finest quality snuggles in our current inventory 💛✨" },
    { num: 7, label: "The Investment Breakdown", text: "Good morning, my dear! Total investment for an exceptional day: zero dollars, one incredible attitude (which you already possess), and perhaps some quality time together 🥐💎" },
    { num: 8, label: "The Acquisition Specialist", text: "Morning beautiful! I'm here to assist you in acquiring: peak happiness levels, premium coffee experiences, and exclusive rights to being the most amazing person I know ☕👑" },
    { num: 9, label: "The Concern Resolution", text: "Good morning, love! I've identified a critical area of concern: the distance between us. I propose we address this consideration with strategic proximity increases throughout the day 😏✨" },
    { num: 10, label: "The Ultimate Luxury Pitch", text: "Morning gorgeous! I'm delighted to offer you a once-in-a-lifetime piece: today. It comes with custom features including your choice of adventures, complimentary sunshine, and a partner who thinks you're absolutely perfect 💫🌟" },
    { num: 11, label: "The Portfolio Manager", text: "Good morning, beautiful! Your happiness portfolio is looking exceptional this morning. I recommend diversifying into: coffee assets, smile equity, and perhaps some strategic kiss investments throughout the day 💼✨" },
    { num: 12, label: "The Exclusive Preview", text: "Morning gorgeous! You're receiving early access to today's premium experiences before they're available to the general public. As a valued member, your day includes complimentary joy and unlimited potential 🌅💎" },
    { num: 13, label: "The Concern Escalation", text: "Good morning, my love! I must bring to your attention a pressing consideration: you're incredibly wonderful, and I'm concerned this fact isn't celebrated enough. Immediate action required 😘✨" },
    { num: 14, label: "The Limited Edition", text: "Morning darling! Today is a limited edition piece—only one available, never to be repeated. I strongly suggest we make this acquisition absolutely unforgettable 🎨👑" },
    { num: 15, label: "The Consultation", text: "Good morning, beautiful! As your dedicated happiness consultant, I've prepared a customized strategy: step 1) amazing coffee, step 2) your beautiful smile, step 3) world domination. Thoughts? ☕💫" },
    { num: 16, label: "The Premium Service", text: "Morning love! You've been automatically enrolled in our platinum tier: unlimited compliments, express delivery of affection, and 24/7 access to someone who thinks you're incredible ✨🏆" },
    { num: 17, label: "The Investment Opportunity", text: "Good morning, gorgeous! Exclusive opportunity alert: invest your energy in today, guaranteed returns in memories, laughter, and possibly some really good food 🥐💛" },
    { num: 18, label: "The Acquisition Report", text: "Morning beautiful! Status update on your happiness acquisition: procurement in progress, delivery estimated within moments of reading this, satisfaction guaranteed or your smile back 😄✨" },
    { num: 19, label: "The Paperwork Update", text: "Good morning, my dear! Reviewing our agreement: I provide endless support and terrible puns, you provide that gorgeous face and brilliant mind. Terms accepted? Initial here: _____ 💎😘" },
    { num: 20, label: "The Collection Specialist", text: "Morning love! Our winter collection now features: warm blankets, hot beverages, and one person who's absolutely obsessed with you in the best way possible 🧣☕👑" },
    { num: 21, label: "The Strategic Advisor", text: "Good morning, gorgeous! Strategic analysis suggests optimal day performance requires: your amazing energy + quality coffee + maybe some us-time. Shall we proceed with this plan? 💫✨" },
    { num: 22, label: "The Exclusive Inventory", text: "Morning beautiful! Checking our available inventory: hugs (unlimited), kisses (premium stock), compliments (fully restocked), and one spectacular day waiting for you 💛🌟" },
    { num: 23, label: "The Investment Forecast", text: "Good morning, my love! Today's forecast: high probability of awesomeness, 100% chance of you being amazing, with scattered moments of joy throughout. Investment advice: seize every moment ✨📊" },
    { num: 24, label: "The Premium Acquisition", text: "Morning gorgeous! I'm pleased to assist you in obtaining the finest quality Monday/Tuesday/etc. from our exclusive selection. This piece features: possibility, laughter, and unlimited potential 🎁💎" },
    { num: 25, label: "The Consideration Consultation", text: "Good morning, darling! I have an area of consideration requiring your expertise: what investment level of adventure are you considering today? Options range from cozy to spectacular 🗺️✨" },
    { num: 26, label: "The VIP Treatment", text: "Morning beautiful! As a preferred client, you receive priority access to: my worst morning hair, first coffee cheers, and the exclusive knowledge that you're the best part of my day ☕👑" },
    { num: 27, label: "The Agreement Amendment", text: "Good morning, love! Proposed amendment to today's agreement: increased allocation of smiles, extended sessions of happiness, and unlimited access to terrible jokes. Your approval? 😄💫" },
    { num: 28, label: "The Premium Assessment", text: "Morning gorgeous! Quality assurance report: your amazingness levels are off the charts, cuteness quotient exceeds standards, overall perfection rating: exceptional ✨🏆" },
    { num: 29, label: "The Exclusive Opportunity", text: "Good morning, my dear! Time-sensitive opportunity: acquire today's premium moments before they're gone. This collection includes sunrise, coffee, and someone who adores you 🌅💛" },
    { num: 30, label: "The Investment Breakdown Deluxe", text: "Morning beautiful! Detailed breakdown of today's investment: 0% stress (goal), 100% your beautiful energy, infinite% potential for amazing moments. ROI: priceless memories 💎✨" }
  ],
  bonus: "Good morning, my exquisite love! Our master artisans have crafted today specifically for you, featuring hand-selected moments of joy, ethically-sourced laughter, and sustainably-grown affection. The initial investment? Simply being the incredible person you are. Complimentary upgrade to 'best day ever' available upon request 🌟👑💫"
};

// ============================================================
// C4.TXT — SOPHISTICATED LUNCH WISHES
// ============================================================
const LUNCH_WISHES = {
  title: "Sophisticated Lunch Wishes",
  categories: [
    {
      label: "Classic Refined",
      items: [
        "May your midday respite be as delightful as you deserve.",
        "Wishing you a rejuvenating pause filled with culinary pleasures.",
        "Trust your afternoon interlude brings both nourishment and tranquility.",
        "May this moment offer you the perfect balance of sustenance and serenity.",
        "Bon appétit—may your meal be as exceptional as your morning achievements."
      ]
    },
    {
      label: "Warmly Elegant",
      items: [
        "Savor every moment of this well-earned break.",
        "May your plate be ever flavorful and your company equally delightful.",
        "Wishing you an afternoon meal as wonderful as your presence brightens our days.",
        "May this dining experience refresh both body and spirit.",
        "Trust you'll discover something extraordinary on your menu today."
      ]
    },
    {
      label: "Playfully Sophisticated",
      items: [
        "May your salad forgive you for what you're actually about to order.",
        "Wishing you the perfect balance: excellent cuisine and zero microwave fish incidents.",
        "May your lunch be delightful enough to justify calling it 'research.'",
        "Trust the calories consumed between noon and one simply don't register.",
        "May your afternoon feast be legendary—and your food coma entirely worth it."
      ]
    },
    {
      label: "Refined Workday Continuation — Motivational & Polished",
      items: [
        "May your afternoon flow with grace, creativity, and remarkable accomplishments.",
        "Wishing you momentum that carries you brilliantly through to day's end.",
        "May the remainder of your day unfold with elegance and ease.",
        "Trust your afternoon brings opportunities as exceptional as your talents.",
        "May you navigate the hours ahead with your characteristic excellence."
      ]
    },
    {
      label: "Refined Workday — Supportive & Sophisticated",
      items: [
        "May your remaining hours be productive yet refreshingly stress-free.",
        "Wishing you the perfect afternoon: challenges that inspire, not overwhelm.",
        "May your work this afternoon flow effortlessly toward completion.",
        "Trust you'll find moments of satisfaction in every task ahead.",
        "May the afternoon treat you as kindly as you deserve."
      ]
    },
    {
      label: "Refined Workday — Warmly Professional",
      items: [
        "May your afternoon be filled with purposeful progress and pleasant surprises.",
        "Wishing you energy that sustains and inspiration that delights.",
        "May each remaining hour bring you closer to both completion and contentment.",
        "Trust your efforts this afternoon will reflect the excellence you embody.",
        "May you finish strong, feeling accomplished and genuinely fulfilled."
      ]
    },
    {
      label: "Elegantly Humorous",
      items: [
        "May your afternoon feature minimal meetings and maximum breakthroughs.",
        "Wishing you the blessing of fast WiFi and slow clocks until five o'clock.",
        "May your afternoon screen time be productive, your coffee strong, and your inbox manageable.",
        "Trust that you're just hours away from well-deserved freedom—make them count beautifully.",
        "May your afternoon be as smooth as your morning coffee was necessary."
      ]
    },
    {
      label: "Combined Luxury — For Colleagues",
      items: [
        "Savor your midday respite—may it revitalize you for an afternoon of inspired achievements.",
        "Wishing you a delightful lunch and an afternoon that flows with remarkable ease.",
        "May your meal nourish and your remaining hours reward your morning excellence."
      ]
    },
    {
      label: "Combined Luxury — For Team Members",
      items: [
        "Trust your lunch brings renewal and your afternoon brings triumph. We're making wonderful progress together.",
        "May your break restore you beautifully—looking forward to our continued excellence this afternoon.",
        "Wishing you a restorative meal and an afternoon where collaboration yields extraordinary results."
      ]
    },
    {
      label: "Combined Luxury — For Leadership",
      items: [
        "May your midday pause offer genuine refreshment before your afternoon's strategic endeavors.",
        "Wishing you nourishment now and inspired leadership through day's end.",
        "Trust your lunch energizes you for the afternoon decisions that will shape our continued success."
      ]
    }
  ]
};

// ============================================================
// C5.TXT — DINNER & REST WISHES
// ============================================================
const DINNER_WISHES = {
  title: "20 Refined, Warm Wishes for Dinner and Rest",
  items: [
    "May your dinner be so exquisite that your taste buds send thank-you notes.",
    "Here's to a meal where every bite feels like a standing ovation for your palate.",
    "May your evening cuisine be matched only by the quality of your dreams tonight.",
    "Wishing you a dinner experience worthy of the restful sanctuary that awaits you.",
    "May your plate be abundant and your pillow impossibly perfect tonight.",
    "Here's to savoring each moment—from the first bite to the last peaceful breath before sleep.",
    "May tonight's meal nourish your body as beautifully as sleep will restore your spirit.",
    "Wishing you culinary delights that make you forget there's a world outside your dining space.",
    "May your dinner conversation be as rich as the meal, and your sleep as deep as the contentment it brings.",
    "Here's to an evening where both your appetite and your need for rest find complete satisfaction.",
    "May tonight's flavors be memorable and tomorrow morning's awakening be gentle.",
    "Wishing you a dining experience that makes meal prep feel like an art form worth repeating.",
    "May your food be delicious, your company delightful, and your mattress magnificently comfortable.",
    "Here's to an evening where 'just one more bite' leads seamlessly to 'just five more minutes' of sleep.",
    "May tonight bring you the twin luxuries of exceptional cuisine and restorative slumber.",
    "Wishing you a meal that satisfies every craving and sleep that erases every concern.",
    "May your dinner plate be as perfectly composed as your sleeping arrangements.",
    "Here's to transitioning gracefully from the pleasure of dining to the bliss of dreaming.",
    "May tonight's nourishment—both culinary and restful—leave you feeling genuinely renewed.",
    "Wishing you an evening where good food and good rest remind you what living well truly means."
  ]
};

// ============================================================
// C6.TXT — 101 PHRASES TO ENGAGE WITH YOUR AUDIENCE
// ============================================================
const AUDIENCE_PHRASES = {
  title: "101 Phrases to Engage with Your Audience",
  categories: [
    {
      id: "thank-you",
      title: "Ways to Say 'Thank You!'",
      items: [
        "Okay, we're blushing.",
        "I'm gonna call this a win",
        "I've officially peaked. Now I can nap.",
        "We feel so seen right now.",
        "Thanks for the validation!",
        "Well, that made me smile!",
        "Right back atcha!",
        "OMG thank you, we tried so hard!",
        "Reading this made me grin from ear to ear.",
        "I love everything about this comment.",
        "Yay! So glad it was helpful!",
        "We appreciate you!"
      ]
    },
    {
      id: "youre-welcome",
      title: "Ways to Say 'You're Welcome!'",
      items: [
        "Always glad to lend a hand!",
        "More than happy to help!",
        "That's exactly why we're here!",
        "If you have any questions about X, we're here!",
        "You know we gotchu.",
        "Awesome, let us know how it goes!",
        "Yay, so glad you found it valuable!",
        "Can't wait to see how it works for you in practice!",
        "Woohoo! That was the goal!",
        "This kind of feedback makes our day!",
        "Just what we like to hear!",
        "Are you kidding? You're so welcome!"
      ]
    },
    {
      id: "critique",
      title: "Ways to Engage with Critique",
      items: [
        "Interesting perspective! Curious to know why...",
        "Here's our take:",
        "We believe X because Y. Thoughts?",
        "I'm going to take some time to think about this!",
        "This actually brings up a really important point:",
        "This question comes up all the time! I'll make another post explaining...",
        "It's a common misconception that X, but research actually shows Y. Super surprising, right?!",
        "Check out (this book) if you want to learn where our opinion comes from!",
        "We go into more depth about this in (this post/resource) — check it out!"
      ]
    },
    {
      id: "enthusiasm",
      title: "Expressing Enthusiasm (3 Words or Less)",
      items: ["Woohoo!", "Success!", "Mind blown.", "Cheers!", "So much yes.", "Mic drop."]
    },
    {
      id: "disagree",
      title: "Kindly Disagreeing",
      items: ["Whatever works for you!", "Thanks for engaging!", "Different people, different perspectives", "All respectful opinions are welcome"]
    },
    {
      id: "appreciation",
      title: "Showing Appreciation",
      items: ["The feeling is mutual!", "You're too kind!", "Come back anytime!", "This means so much"]
    },
    {
      id: "great-points",
      title: "Acknowledging Great Points",
      items: ["What an awesome reminder!", "What a huge value add!", "Thanks for such a valuable contribution!", "BOOM! Way to drop some knowledge!"]
    },
    {
      id: "agreement",
      title: "Expressing Agreement",
      items: ["We're on the same page.", "This is exactly the point!", "Suffice it to say: SAME.", "We feel this so much!"]
    },
    {
      id: "other",
      title: "Other Phrases",
      items: [
        "You are so precious to me",
        "Our friendship means so much to me",
        "Thank you for being here",
        "I appreciate / value you",
        "I always feel heard by you",
        "I believe in you",
        "I love how you ___",
        "I feel safe around you",
        "I love your presence",
        "I love spending time with you",
        "I support you",
        "I am here for you",
        "We're in this together",
        "You have my back",
        "You matter",
        "You enrich my life",
        "Thank you for being so reliable / thoughtful",
        "You are my best friend",
        "I am proud of you",
        "I admire your ___",
        "I will never forget how you ___",
        "Our shared memories are so precious to me",
        "Thanks for your support",
        "You mean so much to me",
        "I love you"
      ]
    }
  ]
};

// ============================================================
// C7.TXT — COMEBACK LINES & REPLIES
// ============================================================
const COMEBACKS = {
  title: "Elite Comeback Lines",
  basic: [
    { trigger: "You can't do anything right.", responses: ["I can—just not for you."] },
    { trigger: "You never change.", responses: ["Consistency is key."] },
    { trigger: "You're so weird.", responses: ["Normal is overrated."] },
    { trigger: "You think you're smart?", responses: ["Smarter than your last decision."] },
    { trigger: "You're so fake.", responses: ["Just reflecting your personality."] },
    { trigger: "How did you get here?", responses: ["Same way you did—I belong."] },
    { trigger: "No one likes you.", responses: ["Good. I'm not for everyone."] },
    { trigger: "You're too much.", responses: ["Then go find less."] },
    { trigger: "You're not even that good.", responses: ["Yet, here you are watching me."] },
    { trigger: "You talk too much.", responses: ["At least I make sense when I do."] },
    { trigger: "You're too sensitive.", responses: ["I'm aware. Are you?", "Emotional intelligence scares some people.", "That's called awareness."] },
    { trigger: "You're overreacting.", responses: ["You're underthinking.", "We have different standards.", "Not everyone tolerates nonsense."] },
    { trigger: "Calm down.", responses: ["(smile) 'I am calm.'", "You sound more upset than I am.", "You're projecting."] },
    { trigger: "You've changed.", responses: ["That's the goal.", "Growth looks strange to stagnant people.", "Upgrade."] },
    { trigger: "You're intimidating.", responses: ["I'm just not shrinking.", "Confidence isn't aggression.", "That's your interpretation."] },
    { trigger: "You always have something to say.", responses: ["And it's usually accurate.", "Silence isn't my strength.", "I contribute."] },
    { trigger: "You're not that special.", responses: ["I'm not trying to be.", "Comparison is exhausting.", "And yet I stand out."] },
    { trigger: "You think you're better than us?", responses: ["Different, yes.", "I think differently.", "Better at some things. So are you."] },
    { trigger: "Why are you like this?", responses: ["Intentional.", "By design.", "Fully."] },
    { trigger: "Nobody asked.", responses: ["And yet here I am.", "Consider it a bonus.", "Now you know."] }
  ],
  elite: {
    heading: "Elite-Level Comebacks (Minimal Words, Maximum Impact)",
    items: ["Interesting.", "Noted.", "That's your opinion.", "If you say so.", "Okay.", "(Smile. Pause. Eye contact. Silence.)"],
    note: "Silence + steady eye contact often hits harder than any line."
  },
  realityCheck: {
    heading: "Important Reality Check",
    lines: [
      "The strongest comeback? Not needing one.",
      "If someone is insecure, baiting you, trying to provoke — the calmest response wins every time.",
      "Power isn't in being louder. It's in being unbothered."
    ]
  },
  categories: [
    {
      id: "workplace",
      title: "Workplace-Appropriate Comebacks",
      desc: "Professional. Composed. Hard to penalize.",
      items: [
        { trigger: "You're not doing this right.", responses: ["I'm open to specific feedback.", "Let's clarify the expectations.", "Show me how you'd approach it."] },
        { trigger: "That's not how we usually do it.", responses: ["Good. Improvement rarely is.", "Processes evolve."] },
        { trigger: "You're behind.", responses: ["What's the priority adjustment?", "Let's align on deadlines."] },
        { trigger: "You're being difficult.", responses: ["I'm being thorough.", "Clarity prevents mistakes."] },
        { trigger: "You're too quiet in meetings.", responses: ["I speak when I have value to add.", "I prefer precision over volume."] }
      ],
      note: "These responses redirect without escalating."
    },
    {
      id: "classy",
      title: "Classy / High-Status Responses",
      desc: "Minimal. Controlled. Almost bored.",
      items: [
        { trigger: "You've changed.", response: "I refined." },
        { trigger: "You're too much.", response: "I'm not for everyone." },
        { trigger: "You're intimidating.", response: "I'm just comfortable." },
        { trigger: "You think you're smart?", response: "I think." },
        { trigger: "Nobody likes you.", response: "That's unlikely." }
      ],
      note: "High-status people don't overexplain."
    },
    {
      id: "funny",
      title: "Funny (Non-Hostile) Replies",
      desc: "Disarms tension.",
      items: [
        { trigger: "You're weird.", response: "Limited edition." },
        { trigger: "You talk too much.", response: "I have a podcast in my head." },
        { trigger: "You're dramatic.", response: "The lighting helps." },
        { trigger: "You're extra.", response: "Premium package." }
      ],
      note: "Humor shifts the power dynamic without making enemies."
    },
    {
      id: "psychological",
      title: "Psychological Reversal Lines",
      desc: "Turn it back without sounding reactive.",
      items: [
        { trigger: "You're overreacting.", response: "Compared to what?" },
        { trigger: "Calm down.", response: "I am. Are you?" },
        { trigger: "You're too sensitive.", response: "Define sensitive." },
        { trigger: "Why are you like this?", response: "What specifically?" },
        { trigger: "You always…", response: "Always is a strong word." }
      ],
      note: "Make them explain themselves. Most critics crumble when pressed for specifics."
    },
    {
      id: "ruthless",
      title: "Ruthless (Use Sparingly)",
      desc: "Only when respect is already gone.",
      items: [
        { trigger: "You're not that good.", response: "And yet you're comparing yourself to me." },
        { trigger: "No one asked.", response: "You're still listening." },
        { trigger: "You can't do anything right.", response: "Not for people who move the goalposts." },
        { trigger: "You're fake.", response: "Projection is common." },
        { trigger: "How did you get here?", response: "Effort." }
      ],
      note: "These should be delivered cold, not emotional."
    }
  ],
  ultimate: {
    heading: "The Ultimate Move",
    text: "The most dominant comeback in existence: Smile. Pause. 'Okay.' Silence forces them to sit in their own insecurity."
  }
};

// ============================================================
// AUDIT1.TXT — ADDITIONAL LINES
// ============================================================
const AUDIT_LINES = {
  eastMalaysia: {
    title: "East Malaysia Lines",
    items: [
      "Sabah and Sarawak didn't join Malaysia. They formed Malaysia. Different thing.",
      "You say 'outstation.' I say 'you mean the 40% of the country you forgot existed?'",
      "KL people discover Sabah, act like they found Narnia. We were here the whole time lah.",
      "Sarawak has its own immigration. Even Malaysia needs a visa to enter. That's not a state, that's a mindset."
    ]
  },
  malaysiaSingaporeBanter: {
    title: "Malaysia–Singapore Banter Lines",
    malaysian: [
      "Singapore is just KL with better drainage and worse food options.",
      "We supply the water. You supply the opinions. Fair trade.",
      "Every Malaysian in Singapore is secretly scouting for cheaper chicken rice to bring back as evidence."
    ],
    singaporean: [
      "Malaysia is Singapore's concept of a long weekend.",
      "We go to JB for cheap food and come back feeling like we've survived something.",
      "The causeway is just a very long argument about who has better laksa."
    ],
    neutral: [
      "Malaysia and Singapore have the same argument every year. The argument is their national sport.",
      "We roast each other like family. Because we basically are."
    ]
  },
  sarcasm: {
    title: "Sarcasm Lines",
    howToSignal: "How to signal sarcasm safely in person: 'Oh absolutely. That plan is perfect. Nothing could go wrong.' (deadpan face, slight pause after)",
    safeSarcasmLines: [
      "Yes, I'm sure the meeting that could have been an email needed two hours.",
      "Brilliant idea. Very first time anyone has thought of this.",
      "Wow. Groundbreaking. Revolutionary. Historic, even."
    ],
    textNote: "In text — always flag sarcasm or it will be read literally. Add '(sarcasm)' or '/s' for new acquaintances. With close friends: italics + obvious exaggeration is usually enough. With family WhatsApp: just don't. Sarcasm dies in family group chats."
  },
  indianMalaysian: {
    title: "Indian Malaysian Comedy Lines",
    items: [
      "Tamil aunties don't gossip. They conduct community welfare assessments.",
      "Indian Malaysian family functions have three stages: eating, eating more, and asking why you're not married yet.",
      "Amma said 'we'll see' which means no, 'maybe' which means no, and 'ask your father' which means definitely no.",
      "The pressure to become a doctor, lawyer, or engineer is so strong, my arts degree came with a survival kit.",
      "South Indian coffee doesn't wake you up. It gives you a mission."
    ]
  },
  receivingSarcasm: {
    title: "When Someone Is Being Sarcastic TO You",
    items: [
      "I felt that. (acknowledges it landed)",
      "Fair. Completely fair.",
      "I deserved that and I'm choosing to grow from it.",
      "You didn't have to. But I respect that you did."
    ]
  },
  voiceNotes: {
    title: "Lines for Voice Notes / Audio Messages",
    items: [
      "Start with silence for 1 second before speaking — it signals the funny thing is coming.",
      "Okay I need you to hear the tone of my voice for this one.",
      "End the voice note before you laugh — let them laugh first, then send a follow-up of just you laughing."
    ]
  },
  tooManyJokes: {
    title: "When You've Told Too Many Jokes in a Row",
    items: [
      "Just go quiet. The silence is funnier than another joke.",
      "Okay I'll stop. I peaked two jokes ago and I know it.",
      "I'm going to let that last one breathe instead of ruining it."
    ]
  },
  callbackLines: {
    title: "Callback Lines — How to Plant and Return",
    howToPlant: "Note one specific, unusual detail someone says early — a word, a preference, a complaint. Anything distinctive. Don't comment on it yet. Return to it 10–20 minutes later as if it's now relevant.",
    examples: [
      { plant: "Someone mentions they always over-order food", payoff: "Before we make any major decision, let's consult the person who ordered four mains for two people." },
      { plant: "Someone says they're 'very organised'", payoff: "I think we should let the organised one handle this. For their mental health and ours." },
      { plant: "Someone calls something 'a vibe'", payoff: "The vibe has entered the chat." }
    ],
    rule: "A callback works best when it's 70% unexpected and 30% inevitable in hindsight. If people have to think too hard to remember the original moment, it won't land."
  },
  genZ: {
    title: "Gen Z / TikTok-Era Malaysian-Singaporean Lines",
    items: [
      "This situation is very much giving main character, but the plot is unclear.",
      "No thoughts, just vibes, and a slight sense of impending doom.",
      "I'm not in my villain era. I'm in my unbothered era. Different.",
      "We need to talk. Specifically, you need to listen while I talk.",
      "That's so real. Unfortunately.",
      "Bestie. No.",
      "It's giving… effort. Appreciate it.",
      "The audacity. Respectfully."
    ]
  },
  conflictLines: {
    title: "Lines for Genuine Conflict Situations",
    guidance: "When tension is real, not just awkward: Don't joke first. Wait for the other person to break. If they laugh, you can follow.",
    lines: [
      "Okay, we're going to figure this out. But first, does anyone need water or a moment?",
      "I'm not going to pretend that wasn't hard. I'm also not going to spiral. So let's pick one."
    ],
    doNot: [
      "'At least it's funny.' — It dismisses.",
      "'This will make a great story.' — Too soon, always.",
      "'You're so dramatic.' — Not comedy. Just rude."
    ]
  },
  aiTechLines: {
    title: "Lines for the Malaysia-Singapore AI/Tech Absurdity Era",
    items: [
      "Malaysia now has an AI strategy, three digital economy blueprints, and somehow the government website still times out.",
      "Singapore's efficiency is real. The queue for the AI chatbot was very organised.",
      "We can use AI to write a business plan, but we still need a fax machine to submit it to some departments.",
      "GenAI came. We used it to write our wedding speech and our leave application. Progress."
    ]
  }
};

// ============================================================
// QUOTES POOL — For Quote of the Day & Ticker
// ============================================================
const QUOTES_POOL = [
  // From main.txt
  { text: "Wah, the silence here got better WiFi than my house.", category: "situational" },
  { text: "Today I'm not late, I'm just giving everyone suspense.", category: "self-deprecating" },
  { text: "I came prepared. Unfortunately, my brain did not.", category: "self-deprecating" },
  { text: "This meeting has reached the stage where even the laptop wants to resign.", category: "work" },
  { text: "Adulting is just saying 'next month better' every month.", category: "relatable" },
  { text: "I don't gossip. I just do community-based information management.", category: "fake-serious" },
  { text: "I'm not broke. I'm in my minimalist finance era.", category: "reframe" },
  { text: "Punch up, punch sideways, or punch yourself. Don't punch down.", category: "ethics" },
  { text: "Sorry I'm late. I was on Malaysian time, but with international ambition.", category: "malaysia" },
  { text: "This food looks like it understands me.", category: "food" },
  { text: "I don't want to overreact, but this might solve three emotional issues.", category: "food" },
  { text: "I'm okay. My soul is just buffering.", category: "relatable" },
  { text: "This queue has character development.", category: "queue" },
  { text: "By the time we reach, I might have matured as a person.", category: "queue" },
  { text: "Ah, the plot twist.", category: "bills" },
  { text: "You're very peaceful today. Either you're wise or your battery is low.", category: "people" },
  { text: "Your brain has no loading screen.", category: "people" },
  { text: "Let's begin before this meeting becomes a lifestyle.", category: "work" },
  { text: "Ah yes, the famous quick call. See you in 47 minutes.", category: "work" },
  { text: "This timeline is ambitious in a spiritual way.", category: "work" },
  { text: "Possible, yes. Comfortable, no.", category: "work" },
  { text: "I'm currently in a long-term relationship with personal development.", category: "family" },
  { text: "Every family needs diversity. They are the achievers. I am the plot twist.", category: "family" },
  { text: "I'm rich in experience. Unfortunately, the landlord does not accept that.", category: "money" },
  { text: "No worries. I was emotionally prepared to go out but spiritually prepared to stay home.", category: "friends" },
  { text: "Cancel accepted. Friendship remains under review.", category: "friends" },
  { text: "You dressed like you know something we don't.", category: "friends" },
  { text: "Before I accidentally become too charming, should I know if someone already has the job?", category: "flirting" },
  { text: "I was going to say something smooth, but then you smiled and now HR needs to investigate my brain.", category: "flirting" },
  { text: "Are you a parking spot in KL? Because finding you feels impossible and emotionally expensive.", category: "pickup" },
  { text: "Are you ERP? Because every time I pass by you, I feel charged.", category: "pickup" },
  { text: "Are you my CPF? Because I'm thinking long-term.", category: "pickup" },
  { text: "Totally fair. I'll recover with dignity and maybe dessert.", category: "rejection" },
  { text: "KL traffic is not transportation. It's character formation.", category: "malaysia" },
  { text: "Waze said 20 minutes. Waze also believes in miracles.", category: "malaysia" },
  { text: "Malaysia has two seasons: raining and about to rain.", category: "malaysia" },
  { text: "The weather today is air fryer mode.", category: "malaysia" },
  { text: "I showered, walked outside, and immediately became soup.", category: "malaysia" },
  { text: "My salary enters the account and immediately becomes a tourist.", category: "money" },
  { text: "In Singapore, even my dreams need budget approval.", category: "singapore" },
  { text: "I breathed near Orchard and somehow spent $18.", category: "singapore" },
  { text: "In Singapore, proposing is easy. The real commitment is applying for BTO.", category: "singapore" },
  { text: "Love is patient, love is kind, love waits four years for keys.", category: "singapore" },
  { text: "I'm not kiasu. I'm pre-disappointed and preparing.", category: "singapore" },
  { text: "In Southeast Asia, 'nearby' can mean five minutes or one emotional journey.", category: "asean" },
  { text: "ASEAN unity is everyone agreeing that their country has the best food.", category: "asean" },
  { text: "Southeast Asian weather is just soup with infrastructure.", category: "asean" },
  { text: "Crossing the road in Vietnam is not walking. It's faith with footwork.", category: "asean" },
  { text: "Vietnamese coffee doesn't wake you up. It negotiates with your soul.", category: "asean" },
  { text: "I'm not saying I'm tired, but my soul just asked for annual leave.", category: "self-deprecating" },
  { text: "My brain has many tabs open, and one is playing music.", category: "self-deprecating" },
  { text: "Good news: we now have a story.", category: "failure" },
  { text: "This is not failure. This is content.", category: "failure" },
  { text: "Congratulations, you are human. Very on-brand.", category: "mistakes" },
  { text: "Thanks for being here. I know everyone has many options, including pretending to check email.", category: "speaking" },
  { text: "I support this nonsense.", category: "texting" },
  { text: "I laughed louder than my dignity allowed.", category: "texting" },
  { text: "I leave for 10 minutes and the group becomes Parliament.", category: "group-chat" },
  { text: "Trying my best, but my best keeps asking for coffee.", category: "social-media" },
  { text: "Romanticizing life because the cost of living is attacking me.", category: "social-media" },
  { text: "Two people slowly discovering whether their childhood wounds are compatible.", category: "explain-badly" },
  { text: "A ritual where humans gather to create more rituals.", category: "explain-badly" },
  { text: "This coffee tastes like it has seen my calendar.", category: "cafe" },
  { text: "Fellowship is just holy networking with snacks.", category: "church" },
  { text: "We say we want peace, but the moment there's drama, suddenly everyone has PhD in investigation.", category: "observation" },
  { text: "Life is ridiculous, and we're in it together.", category: "ethics" },
  { text: "I understand some of these words individually.", category: "confused" },
  { text: "That was so good I briefly believed in excellence again.", category: "impressed" },
  { text: "I'm awake, but not legally.", category: "tired" },
  { text: "Let's eat before my personality changes.", category: "hungry" },
  { text: "The vibes are unstable, but promising.", category: "all-purpose" },
  { text: "That was a choice. A bold one.", category: "all-purpose" },
  { text: "I'm not judging. I'm collecting evidence.", category: "all-purpose" },
  // From audit1.txt
  { text: "Sabah and Sarawak didn't join Malaysia. They formed Malaysia. Different thing.", category: "east-malaysia" },
  { text: "Sarawak has its own immigration. Even Malaysia needs a visa to enter. That's not a state, that's a mindset.", category: "east-malaysia" },
  { text: "Singapore is just KL with better drainage and worse food options.", category: "banter" },
  { text: "We supply the water. You supply the opinions. Fair trade.", category: "banter" },
  { text: "The causeway is just a very long argument about who has better laksa.", category: "banter" },
  { text: "We roast each other like family. Because we basically are.", category: "banter" },
  { text: "Tamil aunties don't gossip. They conduct community welfare assessments.", category: "indian-malaysian" },
  { text: "South Indian coffee doesn't wake you up. It gives you a mission.", category: "indian-malaysian" },
  { text: "This situation is very much giving main character, but the plot is unclear.", category: "gen-z" },
  { text: "I'm not in my villain era. I'm in my unbothered era. Different.", category: "gen-z" },
  { text: "The audacity. Respectfully.", category: "gen-z" },
  { text: "GenAI came. We used it to write our wedding speech and our leave application. Progress.", category: "tech" },
  // From c7.txt
  { text: "Smile. Pause. 'Okay.' Silence forces them to sit in their own insecurity.", category: "comeback" },
  { text: "Growth looks strange to stagnant people.", category: "comeback" },
  { text: "Power isn't in being louder. It's in being unbothered.", category: "comeback" },
  { text: "Limited edition.", category: "comeback-funny" },
  { text: "Premium package.", category: "comeback-funny" },
  { text: "High-status people don't overexplain.", category: "mindset" }
];

// ============================================================
// RAPID FIRE QUESTION DECK
// ============================================================
const RAPID_FIRE_CARDS = [
  { q: "Someone says 'You've changed.' Best response?", a: "That's the goal.", hint: "From Chapter 17 Comebacks", category: "comeback" },
  { q: "Complete: 'I came prepared. Unfortunately...'", a: "my brain did not.", hint: "Comedy delivery example", category: "playbook" },
  { q: "Formula C is called what?", a: "Fake Seriousness", hint: "e.g. 'I don't gossip. I just do community-based information management.'", category: "formula" },
  { q: "What does 'punch up, punch sideways, or punch yourself' mean in comedy?", a: "Joke about power, systems, yourself — not people with less power.", hint: "Comedy Compass Rule", category: "ethics" },
  { q: "Malaysian equivalent of 'How are you?'", a: "Makan already?", hint: "Malaysian Comedy Section", category: "malaysia" },
  { q: "Complete: 'In Singapore, proposing is easy. The real commitment is...'", a: "applying for BTO.", hint: "Singapore BTO jokes", category: "singapore" },
  { q: "Funny (non-hostile) comeback to 'You're weird'?", a: "Limited edition.", hint: "Category 3 Comebacks", category: "comeback" },
  { q: "What's the 'ultimate move' comeback?", a: "Smile. Pause. 'Okay.' Silence.", hint: "Most dominant comeback in existence", category: "comeback" },
  { q: "Complete: 'KL traffic is not transportation. It's...'", a: "character formation.", hint: "Malaysian traffic humor", category: "malaysia" },
  { q: "What 3 things might you sacrifice for a tight deadline?", a: "Scope, sleep, or sanity.", hint: "Work comedy section", category: "work" },
  { q: "Sabah and Sarawak didn't join Malaysia — they did what?", a: "They formed Malaysia. Different thing.", hint: "East Malaysia lines (Audit)", category: "east-malaysia" },
  { q: "What does 'Can lah' survival energy mean?", a: "Manglish way of saying it's manageable, we'll make it work", hint: "Malaysian humor", category: "malaysia" },
  { q: "Clever workplace comeback to 'That's not how we usually do it'?", a: "Good. Improvement rarely is.", hint: "Workplace comebacks", category: "work" },
  { q: "Complete: 'I'm not kiasu. I'm...'", a: "pre-disappointed and preparing.", hint: "Singapore kiasu humor", category: "singapore" },
  { q: "What's a callback in comedy?", a: "Referencing something funny said earlier, later in the conversation.", hint: "Comedy formula", category: "formula" },
  { q: "What does high-status people NOT do, according to comebacks?", a: "They don't overexplain.", hint: "Classy responses", category: "comeback" },
  { q: "Witty comeback to 'You're dramatic'?", a: "The lighting helps.", hint: "Funny non-hostile replies", category: "comeback" },
  { q: "What are the 3 stages of every family gathering?", a: "Eating, interrogation, unsolicited advice.", hint: "Advanced Comedy observations", category: "family" },
  { q: "Respond to 'You're extra' with the premium joke:", a: "Premium package.", hint: "Funny comebacks section", category: "comeback" },
  { q: "How do you end a joke that bombs?", a: "That joke was for me. Thank you for witnessing it.", hint: "Delivery recovery lines", category: "delivery" },
  { q: "Complete the Gen Z line: 'I'm not in my villain era. I'm in my...'", a: "unbothered era. Different.", hint: "Gen Z / TikTok-era lines", category: "gen-z" },
  { q: "What's the self-deprecation line about bank accounts?", a: "I have the confidence of someone who has not checked their bank balance yet.", hint: "Comedy compass safe types", category: "self-deprecating" },
  { q: "Complete: 'My salary enters the account and immediately becomes...'", a: "a tourist.", hint: "Malaysian money humor", category: "malaysia" },
  { q: "What are the 5 things good comedy should do?", a: "Release tension, create connection, make life playful, show humility, name what everyone thinks.", hint: "Chapter 1 Core Rule", category: "playbook" },
  { q: "Singapore version of marriage proposal joke:", a: "Proposing is easy. The real commitment is applying for BTO.", hint: "Singapore BTO humor", category: "singapore" },
  { q: "Complete: 'Good news: we now have a...'", a: "story.", hint: "Comedy for difficult moments", category: "mindset" },
  { q: "What's the pickup line about nasi lemak?", a: "Are you nasi lemak? Because even when I say I'm trying to be healthy, I still choose you.", hint: "Malaysian pickup lines", category: "pickup" },
  { q: "What does 'Aunty WhatsApp is faster than breaking news' end with?", a: "but accuracy depends on the Holy Spirit.", hint: "Malaysian family humor", category: "malaysia" },
  { q: "According to audit, sarcasm dies where?", a: "In family group chats.", hint: "Sarcasm guidance", category: "delivery" },
  { q: "Complete: 'I'm not broke. I'm...'", a: "financially minimalist.", hint: "Emergency line bank", category: "all-purpose" },
  { q: "What does Filipino party 'starts at 7' mean emotionally?", a: "9.", hint: "Philippines humor", category: "asean" },
  { q: "Vietnamese coffee doesn't wake you up — it does what?", a: "Negotiates with your soul.", hint: "ASEAN comedy", category: "asean" },
  { q: "What is Brunei's energy described as?", a: "Calm, clean, and somehow already home by 9.", hint: "Brunei humor", category: "asean" },
  { q: "Complete: 'The vibes are unstable, but...'", a: "promising.", hint: "All-purpose lines", category: "all-purpose" },
  { q: "Complete: 'Fellowship is just holy networking with...'", a: "snacks.", hint: "Church comedy", category: "environment" },
  { q: "What's the East Malaysia immigration line?", a: "Sarawak has its own immigration. Even Malaysia needs a visa to enter. That's not a state, that's a mindset.", hint: "East Malaysia audit lines", category: "east-malaysia" },
  { q: "Complete: 'South Indian coffee doesn't wake you up. It...'", a: "gives you a mission.", hint: "Indian Malaysian lines", category: "indian-malaysian" },
  { q: "What's the flirty text strategy that starts with 'Want to hear a secret?'", a: "Strategy 1: Ask a Cheeky Question", hint: "67 flirty text examples", category: "flirty" },
  { q: "According to the Comedy Ethics, good comedy says what?", a: "Life is ridiculous, and we're in it together.", hint: "Chapter 26 Ethics", category: "ethics" },
  { q: "What's the safe roast formula?", a: "Compliment + tease + warmth", hint: "Roast playbook", category: "roast" }
];

// ============================================================
// QUESTION OF THE DAY POOL
// ============================================================
const QOTD_POOL = [
  { q: "What's the most Malaysian thing about you right now?", category: "reflect", emoji: "🇲🇾" },
  { q: "Which comedy formula do you use most often without realising it?", category: "self-awareness", emoji: "🎭" },
  { q: "What's one thing you can now joke about that you couldn't before?", category: "growth", emoji: "🌱" },
  { q: "What's your best 'explain badly' joke for your job?", category: "creative", emoji: "😂" },
  { q: "What's the most 'uncle/aunty' thing you do?", category: "relatable", emoji: "👴" },
  { q: "What food opinion could get you cancelled by your friends?", category: "food", emoji: "🌶️" },
  { q: "What life lesson did you learn the expensive way?", category: "wisdom", emoji: "💸" },
  { q: "What's your toxic trait that is also kind of useful?", category: "self-awareness", emoji: "⚗️" },
  { q: "Which pickup line would you actually use in real life?", category: "flirting", emoji: "💘" },
  { q: "What's the most passive-aggressive thing that has ever happened in your family WhatsApp group?", category: "family", emoji: "📱" },
  { q: "If you had to 'explain badly' what dating is, what would you say?", category: "dating", emoji: "❤️‍🔥" },
  { q: "What's a line you wish you'd said in the moment but only thought of later?", category: "comeback", emoji: "⚡" },
  { q: "Which workplace comedy line do you relate to the most right now?", category: "work", emoji: "💼" },
  { q: "What's your 'makan already?' equivalent — the question you ask instead of 'how are you?'", category: "culture", emoji: "🍜" },
  { q: "What's one thing your country does that is annoying but lovable?", category: "culture", emoji: "🌏" },
  { q: "What song makes you think of someone right now?", category: "flirting", emoji: "🎵" },
  { q: "What's your emergency line bank line for when you're confused?", category: "emergency", emoji: "🚨" },
  { q: "Which Good Morning message style best matches your personality?", category: "personality", emoji: "☀️" },
  { q: "What's a comeback you've actually used that worked perfectly?", category: "comeback", emoji: "🎯" },
  { q: "If you were a flirty text strategy, which one would you be?", category: "personality", emoji: "📲" },
  { q: "What's the most Singlish or Manglish thing you've said this week?", category: "language", emoji: "🗣️" },
  { q: "What's something you say instead of 'I'm tired' that's funnier?", category: "creative", emoji: "😴" },
  { q: "What's your 'Okay, we pivot. Startup energy.' moment of the week?", category: "work", emoji: "🔄" },
  { q: "If life gave you a comedy formula right now, which one would it be (A, B, C, D, or E)?", category: "reflect", emoji: "📝" },
  { q: "What's the most 'this queue has character development' thing you've been in recently?", category: "singapore", emoji: "🧍" },
  { q: "What's the wittiest way to describe your current financial situation?", category: "money", emoji: "💰" },
  { q: "What would your 'explain dating badly' version sound like?", category: "dating", emoji: "💑" },
  { q: "What's the most recent 'the WiFi has chosen violence' moment you've had?", category: "tech", emoji: "📶" },
  { q: "What's your version of 'I'm in my unbothered era'?", category: "gen-z", emoji: "😌" },
  { q: "Which of the 5 comedy functions do you think you do best?", category: "self-awareness", emoji: "✨" }
];

// Export all data for use in other modules
if (typeof module !== 'undefined') {
  module.exports = {
    PLAYBOOK_META, PLAYBOOK_CHAPTERS, FLIRTY_TEXTS, FLIRTY_MESSAGES,
    GOOD_MORNING, LUNCH_WISHES, DINNER_WISHES, AUDIENCE_PHRASES,
    COMEBACKS, AUDIT_LINES, QUOTES_POOL, RAPID_FIRE_CARDS, QOTD_POOL
  };
}
