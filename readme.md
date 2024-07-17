# 📖 Markov Chain Bible Quote Generator 📖

Infinite quotes from the Bible generated by a Markov chain. ✨

## ✨ Latest Quote ✨
"books there is no end; and much study is a weariness of the flesh."

### ⏰ Generated At
*3:21:54 PM*

<details>
    <summary>🛠️ Generation Details</summary>
    <p>
        <strong>🌱 Seed:</strong> books<br>
        <strong>🔄 Iterations:</strong> 13<br>
        <strong>📜 Context History:</strong><br>[ books ]: there<br>[ books, there ]: is<br>[ books, there, is ]: no<br>[ books, there, is, no ]: end;<br>[ books, there, is, no, end; ]: and<br>[ books, there, is, no, end;, and ]: much<br>[ there, is, no, end;, and, much ]: study<br>[ is, no, end;, and, much, study ]: is<br>[ no, end;, and, much, study, is ]: a<br>[ end;, and, much, study, is, a ]: weariness<br>[ and, much, study, is, a, weariness ]: of<br>[ much, study, is, a, weariness, of ]: the<br>[ study, is, a, weariness, of, the ]: flesh.<br>
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
