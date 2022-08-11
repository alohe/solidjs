import styles from "./App.module.css";
import { createSignal, createMemo, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

function App() {
  const [count, setCount] = createSignal(0);
  const [playing, setPlaying] = createSignal(true);
  const [addedMore, setAddedMore] = createSignal(false);

  const [list, setList] = createStore(["🐕‍🦺", "🦋", "🐶"]);

  let myInterval = setInterval(() => {
    if (count() >= list.length - 1) {
      setCount(0);
    } else {
      setCount(count() + 1);
    }
  }, 600);

  const toggleInterval = () => {
    if (myInterval) {
      clearInterval(myInterval);
      myInterval = null;
      setPlaying(false);
    } else {
      myInterval = setInterval(() => {
        if (count() > list.length) {
          setCount(0);
        } else {
          setCount(count() + 1);
        }
      }, 600);
      setPlaying(true);
    }
  };

  const addMoreToStore = () => {
    console.log(addedMore());
    if (addedMore() === false) {
      let toBeAdded = [
        "🐱",
        "🐭",
        "🐹",
        "🐰",
        "🐻",
        "🐼",
        "🐨",
        "🐯",
        "🦁",
        "🐮",
        "🐷",
        "🐸",
        "🐵",
        "🐔",
        "🐧",
        "🐦",
        "🐤",
        "🐣",
        "🐥",
        "🦆",
        "🦅",
        "🦉",
        "🦇",
        "🐺",
        "🐗",
        "🐴",
        "🦄",
        "🐝",
        "🐛",
        "🦋",
        "🐌",
        "🐚",
        "🐞",
        "🐜",
        "🦗",
        "🕷",
        "🕸",
        "🦂",
        "🦟",
        "🦠",
        "🐢",
        "🐍",
        "🦎",
        "🦖",
        "🦕",
        "🐙",
        "🦑",
        "🦐",
        "🦞",
        "🦀",
        "🐡",
        "🐠",
        "🐟",
        "🐬",
        "🐳",
        "🐋",
        "🦈",
        "🐊",
        "🐅",
        "🐆",
        "🦓",
        "🦍",
        "🐘",
        "🦏",
        "🦛",
        "🦏",
        "🐪",
        "🐫",
        "🦒",
        "🦘",
        "🦡",
        "🐃",
        "🐂",
        "🐄",
        "🐎",
        "🐖",
        "🐏",
        "🐑",
        "🐐",
        "🦌",
        "🐕",
        "🐩",
        "🐈",
        "🐓",
        "🦃",
        "🐇",
        "🐁",
        "🐀",
        "🐿",
        "🐾",
        "🐉",
        "🐲",
        "🌵",
        "🎄",
        "🌲",
        "🌳",
        "🌴",
        "🌱",
        "🌿",
      ];
      setList([...list, ...toBeAdded]);
      setAddedMore(true);
    } else {
      return;
    }
  };

  createEffect(() => {
    console.log(count());
  });

  return (
    <div class={styles.App}>
      <header class={styles.header} id="header">
        <h1 style={{ marginBottom: "-20px", color: "lightblue" }}>
          Solid is cool {list[count()]}
        </h1>

        <button class={styles.button} onClick={() => toggleInterval()}>
          {!playing() ? "Paused" : "Playing..."}
        </button>
        <button
          class={styles.button}
          style={{ background: addedMore() ? "lightgreen" : "", color: addedMore() ? "white" : "" }}
          disabled={addedMore()}
          onClick={() => addMoreToStore()}
        >
          {addedMore() ? "Added all emojis!" : "Add more emojis"}
        </button>

        <h2>Emojis List</h2>
        <div class={styles.emojis__container}>
          <For each={list}>{(each) => <>{each}</>}</For>
        </div>
      </header>
    </div>
  );
}

export default App;
