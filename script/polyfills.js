import "@ungap/custom-elements"
import "container-query-polyfill"
import "@oddbird/popover-polyfill"
import "construct-style-sheets-polyfill"

/* Declarative ShadowDOM polyfill */
function attachShadowRoots(root) {
  root.querySelectorAll("template[shadowrootmode]").forEach((template) => {
    const mode = template.getAttribute("shadowrootmode")
    const shadowRoot = template.parentNode.attachShadow({ mode })
    shadowRoot.appendChild(template.content)
    template.remove()
    attachShadowRoots(shadowRoot)
  })
}
attachShadowRoots(document)
