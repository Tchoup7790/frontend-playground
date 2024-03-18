import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="home pages">
    <a class="home__link" href="/src/components/Button/">Button Pages</a>
    <a class="home__link" href="/src/components/MagnetButton/">Magnet Button Pages</a>
    <a class="home__link" href="/src/components/Text/">Text Pages</a>
    <a class="home__link" href="/src/components/Toggles/">Toggles Button</a>
  </div>
`
