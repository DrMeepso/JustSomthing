# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"not strong, yet they prepare their meat in the summer; 30:26"

### ⏰ Generated At
*6:26:17 PM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> not<br>
        <strong>🔄 Iterations:</strong> 10<br>
        <strong>📜 Context History:</strong><br>[ not ]: strong,<br>[ not, strong, ]: yet<br>[ not, strong,, yet ]: they<br>[ not, strong,, yet, they ]: prepare<br>[ not, strong,, yet, they, prepare ]: their<br>[ not, strong,, yet, they, prepare, their ]: meat<br>[ strong,, yet, they, prepare, their, meat ]: in<br>[ yet, they, prepare, their, meat, in ]: the<br>[ they, prepare, their, meat, in, the ]: summer;<br>[ prepare, their, meat, in, the, summer; ]: 30:26<br>
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
