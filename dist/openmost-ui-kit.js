import { ref as u, openBlock as d, createElementBlock as i, Fragment as p, createElementVNode as t, toDisplayString as c, pushScopeId as _, popScopeId as h, createTextVNode as o } from "vue";
const g = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of l)
    a[n] = r;
  return a;
}, s = (e) => (_("data-v-de5a9a08"), e = e(), h(), e), m = { class: "card" }, v = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), f = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), k = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), V = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), b = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    const l = u(0);
    return (a, n) => (d(), i(p, null, [
      t("h1", null, c(e.msg), 1),
      t("div", m, [
        t("button", {
          type: "button",
          onClick: n[0] || (n[0] = (r) => l.value++)
        }, "count is " + c(l.value), 1),
        v
      ]),
      f,
      k,
      V
    ], 64));
  }
}, S = /* @__PURE__ */ g(b, [["__scopeId", "data-v-de5a9a08"]]);
export {
  S as HelloWorld
};
