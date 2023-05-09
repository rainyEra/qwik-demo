import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";
export default component$(() => {
  const state = useStore({
    list: [
      { name: "John", active: false, key: crypto.randomUUID() },
      { name: "Annet", active: false, key: crypto.randomUUID() },
      { name: "Evangelina", active: true, key: crypto.randomUUID() },
      { name: "Jerry", active: false, key: crypto.randomUUID() },
      { name: "Noah", active: true, key: crypto.randomUUID() },
    ],
    activate: $(function (target: number, value: boolean) {
      this.list[target].active = value;
      console.log(this.list[target]);
    }),
    addMore: $(function (item) {
      this.list.push(item);
      console.log(this.list);
    }),
  });

  return (
    <>
      <div class={styles.app}>
        {state.list.map((v, i) => (
          <p class={v.active ? styles.active : ""} key={v.key}>
            <input
              type="checkbox"
              checked={v.active ? true : false}
              onChange$={(e) => {
                console.log(e.target.checked);
                state.activate(i, e.target.checked);
              }}
            />
            {v.name}
          </p>
        ))}
        <button
          onClick$={() => {
            state.addMore({
              name: "ASD",
              active: true,
              key: crypto.randomUUID(),
            });
          }}
        >
          Add more!
        </button>
      </div>
    </>
  );
});
