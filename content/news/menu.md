---
title: Navigation Menu
date: 2025-07-23
---

<style>
  .demo-menu {
    --height: 2em;
    --padding: .5em;
    --width: auto;
    position: sticky;
    top: 0;
    width: var(--width);
    summary, a {
      background: black;
      cursor: pointer;
      line-height: 2em;
      padding: 0 var(--padding);
    }
    a {
      display: block;
      padding-left: calc(var(--height) + var(--padding));
      padding-right: calc(16px + var(--padding));
      text-decoration: none;
    }
    a:hover { background: maroon; }
    summary {
      height: var(--height);
      padding-left: 0;
    }
    summary::before {
      background-color: maroon;
      content: '';
      float: left;
      height: var(--height);
      margin-right: var(--padding);
      width: var(--height);
    }
    &:open summary::before { background-color: darkgreen;}
    summary::marker { content: ''; }
    ul {
      list-style: none;
      margin: 0;
      max-height: calc(100vh - var(--height));
      overflow-y: auto;
      padding: 0;
      position: absolute;
      width: var(--width);
    }
  }
</style>
<details class='demo-menu'>
  <summary>
    Menu
  </summary>
  <ul>
    <li><a href='#'>Alces</a></li>
    <li><a href='#'>Bison</a></li>
    <li><a href='#'>Bubo</a></li>
    <li><a href='#'>Bufo</a></li>
    <li><a href='#'>Buteo</a></li>
    <li><a href='#'>Capreolus</a></li>
    <li><a href='#'>Caracal</a></li>
    <li><a href='#'>Caretta</a></li>
    <li><a href='#'>Crossoptilon</a></li>
    <li><a href='#'>Francolinus</a></li>
    <li><a href='#'>Gallus</a></li>
    <li><a href='#'>Giraffa</a></li>
    <li><a href='#'>Gorilla</a></li>
    <li><a href='#'>Jacana</a></li>
    <li><a href='#'>Lagopus</a></li>
    <li><a href='#'>Lutra</a></li>
    <li><a href='#'>Lynx</a></li>
    <li><a href='#'>Meles</a></li>
    <li><a href='#'>Mephitis</a></li>
    <li><a href='#'>Naja</a></li>
    <li><a href='#'>Natrix</a></li>
    <li><a href='#'>Pica</a></li>
    <li><a href='#'>Quelea</a></li>
    <li><a href='#'>Rattus</a></li>
    <li><a href='#'>Redunca</a></li>
    <li><a href='#'>Rupicapra</a></li>
    <li><a href='#'>Sula</a></li>
    <li><a href='#'>Vulpes</a></li>
  </ul>
</details>

How can we have a reasonable menu for a website that will work well on small and large screens alike? It should have some way of expanding so that is stays out of the way when we're focusing on the current page. If you are unsure, just have a link back to the home page and all navigation can be there in sitemap form.

There's nothing quite like a vertically scrolling list. If you've ever had the pleasure to use the [Application Finder in Xfce](https://docs.xfce.org/xfce/xfce4-appfinder/start), you may share my disdain for various fly-out menus of the past or the grids of the future.

I recommend starting with alphabetical order. This will create a dictionary-like search paradigm until you feel the need to add filtering.

Sections of related menu items might be desired. Just please avoid reordering menu items. And consider that it is quite easy to use a single list. Categories actually slow down the user from getting to a specific item. Categories are for people who don't know what they want yet. You could have category pages instead of polluting the main menus.

Never slide the page around, as that would be disorienting. The menu could slide in from off the screen if you require animations. You may also fade the page if it distracts from the menu.

Theory is all well and good, but how do you get started? As always, we start with HTML, and add CSS for layout. This demo will not require JavaScript, and I recommend sticking with CSS to avoid pitfalls.

# HTML menu
```
<details class='menu'>
  <summary>Menu</summary>
  <ul>
    <li><a href='#'>Alces</a></li>
    <li><a href='#'>Bison</a></li>
    <li><a href='#'>Caracal</a></li>
  </ul>
</details>
```
# CSS
These styles create a top menu button that opens a scrolling vertical list of links. You may set the width to `100%` if you like. Make sure to pad the right side of the `<ul>` or the `<a>` by at least 16px for the scrollbar.

CSS markers are limited to text, so we replace it with a larger `::before` pseudo-element that turns green when the menu is open. I've adjusted the padding-left to line up the text with the larger marker.
```
.menu {
  --height: 2em;
  --padding: .5em;
  --width: auto;
  position: sticky;
  top: 0;
  width: var(--width);
  summary, a {
    background: cyan;
    cursor: pointer;
    line-height: 2em;
    padding: 0 var(--padding);
  }
  a {
    display: block;
    padding-left: calc(var(--height) + var(--padding));
    padding-right: calc(16px + var(--padding));
    text-decoration: none;
  }
  a:hover { background: orange; }
  summary {
    height: var(--height);
    padding-left: 0;
  }
  summary::before {
    background-color: red;
    content: '';
    float: left;
    height: var(--height);
    margin-right: var(--padding);
    width: var(--height);
  }
  &:open summary::before { background-color: green;}
  summary::marker { content: ''; }
  ul {
    list-style: none;
    margin: 0;
    max-height: calc(100vh - var(--height));
    overflow-y: auto;
    padding: 0;
    position: absolute;
    width: var(--width);
  }
}
```