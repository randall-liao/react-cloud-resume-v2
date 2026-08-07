# LinkedIn Post: Building Spyfall Arena (Scrollytelling & Multi-Agent Visual Loops)

🚀 Live Demo: https://randalldev.link/spyfall-arena.html

Spyfall used to be the game my colleagues and I played during lunch breaks. So I decided to see what happens when AI models play it—and built a multi-agent visual loop to direct the animation. 🕵️‍♂️🤖🎥

---

### 🍱 The Origin: Can AI Lie Under Pressure?
Back when I played Spyfall with my team at lunch, the whole game hinged on subtle communication: Civilians give vague hints to prove they know the location without leaking secrets to the blind Spy. 

But what happens when LLMs play? Can an AI model bluff when it knows nothing? Or will its helpful nature force it to leak concrete clues?

As a backend software engineer, I had zero web animation experience. But AI unlocked brand-new creative roles overnight—letting me step into the shoes of an animation director. Instead of wrestling with complex animation math, I authored a cinematic script and shot list (`animation_design.md`) to choreograph a 21-beat scrollytelling showdown between GPT, Claude, Gemini, and DeepSeek.

---

### ⚠️ The Coding Agent Trap: "Passes Unit Tests, Fails Human Review"
Translating a 21-beat cinematic script into React + GSAP code turned out to be a massive hurdle for AI coding agents:

❌ Unit tests lied: The generated code passed every DOM assertion and unit test with flying colors.
❌ Human review failed: When I opened the browser, the animation was mechanically stiff, visual layers overlapped, text skewed into unreadable angles, and camera timing felt completely off.

Traditional unit tests couldn't evaluate whether an animation *felt good* or looked human-grade.

---

### 🔄 The Solution: A Multi-Agent Self-Improvement Loop
Instead of manually writing endless prompt fixes, I built an automated Visual Model + Coding Model feedback loop:

1️⃣ Visual Requirements & Grounding Baseline: Authored the script and used Generative AI (ChatGPT Images 2.0 & VEO 3) to generate keyframe storyboards and motion animatics. I reviewed and approved these visuals as the ground-truth spec for the AI agents.
2️⃣ Automated Capture: A Playwright test harness launched the browser, stepped through the 21 GSAP animation beats, and captured both full video recordings and high-res step screenshots.
3️⃣ Multimodal Visual Judge: A Visual LLM Agent processed the video and screenshot inputs natively via multimodal VL, comparing the live rendered UI against the human-approved ground-truth spec to flag overlapping elements, alignment drift, and timing glitches.
4️⃣ Automated Code Refactoring: The Visual Judge fed precise visual critique directly back to the Coding Agent, which refactored the React + GSAP code in an iterative loop until it achieved human-level visual polish!

---

⚙️ Web Architecture Highlights:
• Vite Multi-Page Architecture: Code-split the animated intro (`/spyfall-arena.html`) into an isolated Rollup bundle so cinematic assets never bloat the main site.
• React State + Scoped GSAP: A 21-step state machine with `@gsap/react` (`useGSAP`) ensuring clean timeline destruction and zero memory leaks.
• Physical Word Extraction: Watch concrete clue words physically tear out of speech bubbles and orbit into the Spy's interface.

---

🍿 Will the Civilians spot the Spy, or will the Spy decode the hidden location first?

🔗 Launch the interactive showdown live to find out! https://randalldev.link/spyfall-arena.html

💻 Open-source repo: https://github.com/randall-liao/spyfall-arena

#AgenticAI #AIAgents #AICoding #AgenticWorkflows #AISoftwareEngineering #SoftwareEngineering #AIEngineering #Frontend #ReactJS #GSAP #Vite #Playwright #MultiAgent #VisualAI #UIUX #BuildInPublic
