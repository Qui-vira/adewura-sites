# What the UNESCO recording sounds like

Analyzed 17 Oct 2026 from the designer's screen recording (2 min 15 s). Three tools, because no one here can listen:

- Whisper (OpenAI's speech-to-text model, "small" size) to find any spoken words.
- librosa (a music-analysis library) to measure loudness, brightness, beat and key over time.
- The MIT AST sound classifier, trained on Google's AudioSet, to name the sounds in 10-second windows.

## Findings

| Time | What's there | Evidence |
|---|---|---|
| 0 to 18 s | Silence. The logo, the loader and the welcome scene play with no sound. | Level stays at -86 dB, the floor of the recording. Classifier: "Silence" 0.70. |
| about 18 s | Sound starts exactly when "Visit now" is clicked. | Level jumps to -17 dB in the same window the button is pressed in the video. |
| 18 to 28 s | Music plus a rushing whoosh, like wind or surf, during the dive through the clouds. | Classifier: "Car", "Vehicle", "Waves, surf", "Whoosh" next to "Music". Brightness peaks here. |
| 30 s to end | Soft, slow, sad-sounding ambient music. Sustained notes, no drums. Light plucked or chime-like notes. | Classifier: "New-age music" up to 0.45, plus "Tender", "Sad", "Ambient". 98% of the energy is held notes and 1% is percussion. No steady beat (pulse clarity 0.07). |
| 65 to 80 s | Small soft clicks while the visitor uses the search panel. | Classifier: "Drip", "Plop", "Squish". Bursts of short hits in the same seconds. |
| Whole video | No speech at all. | Whisper found 0 speech segments. |

Weak evidence, read with care:

- Key: C minor is the best match (0.87 correlation), but this is one automatic estimate.
- Instruments: "Harp", "Chime", "Glass" and "Singing bowl" score only 0.03 to 0.06. They suggest plucked and bell-like sounds. They don't prove which instrument it is.
- The 129 BPM tempo estimate is unreliable, because the music has almost no beat to measure.

## What this means for our sites

1. UNESCO uses Option B. The site stays silent until the visitor taps "Visit now", and that tap turns the sound on. Browsers block sound until a visitor taps something, which is why the button exists.
2. Three layers of sound: a calm music bed, one big whoosh on the dive into the 3D, and tiny soft clicks on buttons.
3. The music stays at one steady volume and never gets loud, so it never fights the visuals.
