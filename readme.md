# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"two oxen, five rams, five he goats, five lambs of the first year: this was the offering of ahiezer the son of ammishaddai."

### ⏰ Generated At
*2:31:49 PM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> two<br>
        <strong>🔄 Iterations:</strong> 22<br>
        <strong>📜 Context History:</strong><br>[ two ]: oxen,<br>[ two, oxen, ]: five<br>[ two, oxen,, five ]: rams,<br>[ two, oxen,, five, rams, ]: five<br>[ two, oxen,, five, rams,, five ]: he<br>[ two, oxen,, five, rams,, five, he ]: goats,<br>[ oxen,, five, rams,, five, he, goats, ]: five<br>[ five, rams,, five, he, goats,, five ]: lambs<br>[ rams,, five, he, goats,, five, lambs ]: of<br>[ five, he, goats,, five, lambs, of ]: the<br>[ he, goats,, five, lambs, of, the ]: first<br>[ goats,, five, lambs, of, the, first ]: year:<br>[ five, lambs, of, the, first, year: ]: this<br>[ lambs, of, the, first, year:, this ]: was<br>[ of, the, first, year:, this, was ]: the<br>[ the, first, year:, this, was, the ]: offering<br>[ first, year:, this, was, the, offering ]: of<br>[ year:, this, was, the, offering, of ]: ahiezer<br>[ this, was, the, offering, of, ahiezer ]: the<br>[ was, the, offering, of, ahiezer, the ]: son<br>[ the, offering, of, ahiezer, the, son ]: of<br>[ offering, of, ahiezer, the, son, of ]: ammishaddai.<br>
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
