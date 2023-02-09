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
      { name: "Walter", active: true, key: crypto.randomUUID() },
    ],
    count: 0,
    activate: $(function (target: number) {}),
  });
  return (
    <>
      <div class={styles.app}>
        {state.list.map((v, i) => (
          <p class={v.active ? styles.active : null} key={v.key}>
            <input
              type="checkbox"
              checked={v.active ? true : false}
              onClick$={() => {
                const value = state.list[i].active!;
                state.list[i].active = true;
                console.log("value", value);
                console.log(state.list[i]);
              }}
            />
            {v.name}
          </p>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
