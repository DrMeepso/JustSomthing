# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"i love thy law! it is my meditation all the day."

### ⏰ Generated At
*2:56:39 PM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> i<br>
        <strong>🔄 Iterations:</strong> 10<br>
        <strong>📜 Context History:</strong><br>[ i ]: love<br>[ i, love ]: thy<br>[ i, love, thy ]: law!<br>[ i, love, thy, law! ]: it<br>[ i, love, thy, law!, it ]: is<br>[ i, love, thy, law!, it, is ]: my<br>[ love, thy, law!, it, is, my ]: meditation<br>[ thy, law!, it, is, my, meditation ]: all<br>[ law!, it, is, my, meditation, all ]: the<br>[ it, is, my, meditation, all, the ]: day.<br>
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
