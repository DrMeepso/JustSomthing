# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"many hired servants of my father's have bread enough and to spare, and i perish with hunger! 15:18"

### ⏰ Generated At
*11:18:35 PM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> many<br>
        <strong>🔄 Iterations:</strong> 17<br>
        <strong>📜 Context History:</strong><br>[ many ]: hired<br>[ many, hired ]: servants<br>[ many, hired, servants ]: of<br>[ many, hired, servants, of ]: my<br>[ many, hired, servants, of, my ]: father's<br>[ many, hired, servants, of, my, father's ]: have<br>[ hired, servants, of, my, father's, have ]: bread<br>[ servants, of, my, father's, have, bread ]: enough<br>[ of, my, father's, have, bread, enough ]: and<br>[ my, father's, have, bread, enough, and ]: to<br>[ father's, have, bread, enough, and, to ]: spare,<br>[ have, bread, enough, and, to, spare, ]: and<br>[ bread, enough, and, to, spare,, and ]: i<br>[ enough, and, to, spare,, and, i ]: perish<br>[ and, to, spare,, and, i, perish ]: with<br>[ to, spare,, and, i, perish, with ]: hunger!<br>[ spare,, and, i, perish, with, hunger! ]: 15:18<br>
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
