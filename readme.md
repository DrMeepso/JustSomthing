# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"i cried, o lord; and in the morning shall my prayer prevent thee."

### ⏰ Generated At
*9:58:03 PM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> i<br>
        <strong>🔄 Iterations:</strong> 12<br>
        <strong>📜 Context History:</strong><br>[ i ]: cried,<br>[ i, cried, ]: o<br>[ i, cried,, o ]: lord;<br>[ i, cried,, o, lord; ]: and<br>[ i, cried,, o, lord;, and ]: in<br>[ i, cried,, o, lord;, and, in ]: the<br>[ cried,, o, lord;, and, in, the ]: morning<br>[ o, lord;, and, in, the, morning ]: shall<br>[ lord;, and, in, the, morning, shall ]: my<br>[ and, in, the, morning, shall, my ]: prayer<br>[ in, the, morning, shall, my, prayer ]: prevent<br>[ the, morning, shall, my, prayer, prevent ]: thee.<br>
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
