/**
 * Global Actions Menu Handler
 * Handles 3-dot menu display across all dashboard pages using portal mechanism
 * This prevents menu clipping in overflow containers
 */
function toggleUserActionsMenu(btn) {
  try {
    document.querySelectorAll(".portable-actions-menu").forEach((el) => el.remove());
    const orig = btn.parentElement?.querySelector("div.absolute");
    if (!orig) return;
    const menu = orig.cloneNode(true);
    menu.classList.remove("hidden");
    menu.classList.add("portable-actions-menu");
    menu.style.position = "fixed";
    menu.style.zIndex = "9999";
    menu.style.inset = "auto";
    document.body.appendChild(menu);
    const rect = btn.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    let left = rect.right - menuRect.width;
    let top = rect.bottom + 8;
    left = Math.max(8, Math.min(left, window.innerWidth - menuRect.width - 8));
    if (top + menuRect.height > window.innerHeight) top = rect.top - menuRect.height - 8;
    menu.style.left = left + "px";
    menu.style.top = top + "px";
    const close = () => {
      try {
        menu.remove();
      } catch {}
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
    const onDocClick = (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) close();
    };
    setTimeout(() => document.addEventListener("click", onDocClick), 0);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
  } catch (e) {
    console.error(e);
  }
}
