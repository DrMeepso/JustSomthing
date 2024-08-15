# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"my father, the chariot of israel, and the horsemen thereof."

### ⏰ Generated At
*11:28:01 AM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> my<br>
        <strong>🔄 Iterations:</strong> 9<br>
        <strong>📜 Context History:</strong><br>[ my ]: father,<br>[ my, father, ]: the<br>[ my, father,, the ]: chariot<br>[ my, father,, the, chariot ]: of<br>[ my, father,, the, chariot, of ]: israel,<br>[ my, father,, the, chariot, of, israel, ]: and<br>[ father,, the, chariot, of, israel,, and ]: the<br>[ the, chariot, of, israel,, and, the ]: horsemen<br>[ chariot, of, israel,, and, the, horsemen ]: thereof.<br>
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
