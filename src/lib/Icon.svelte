<script>
  export let path;
  export let className;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class={className} viewBox="0 0 448 512"
  ><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
  {@html path}
</svg>

<style>
  .svgIcon {
    width: 6rem;
    height: 3rem;
    fill: #ffffff;
    transition: 
      all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .svgIcon:hover {
    fill: #c2c1c1;
  }
</style>
