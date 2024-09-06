# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"lambs: they shall be holy to the lord for the priest."

### ⏰ Generated At
*2:30:47 AM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> lambs:<br>
        <strong>🔄 Iterations:</strong> 10<br>
        <strong>📜 Context History:</strong><br>[ lambs: ]: they<br>[ lambs:, they ]: shall<br>[ lambs:, they, shall ]: be<br>[ lambs:, they, shall, be ]: holy<br>[ lambs:, they, shall, be, holy ]: to<br>[ lambs:, they, shall, be, holy, to ]: the<br>[ they, shall, be, holy, to, the ]: lord<br>[ shall, be, holy, to, the, lord ]: for<br>[ be, holy, to, the, lord, for ]: the<br>[ holy, to, the, lord, for, the ]: priest.<br>
    </p>
</details>

### ⚠️ Disclaimer ⚠️
**This quote is generated by a program and is not to be taken seriously. It is purely for entertainment purposes.**

---

## 🔍 How It Works

This repo uses a Markov chain to generate Bible quotes. The quotes are generated by using the Bible as a dataset to find the probability of a word appearing after a sequence of words. The quotes are generated by starting with a random word and then selecting the next word based on the probability of it appearing after the current sequence of words. This process is repeated until the desired length of the quote is reached.

This repo will update the latest quote in this README every 10 minutes. ⏳

All code for the actual Markov chain is in `index.ts`.

## ❓ Why

I was just messing around with Markov Chains and found that the Bible surprisingly yielded good results when prompted. 
It was suggested by a friend, and I am in no way christian.

Feel free to adjust the text further to accurately reflect your intent and experience with the project!

---

*Enjoy*✨
