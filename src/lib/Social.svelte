<script>
  import Icon from "./Icon.svelte";
  import socialIcons from "../socialIcons";
</script>

<ul id="icons" class="icons">
  {#each socialIcons as icon}
    <li>
      <a href={icon.link} target="_blank">
        <Icon {...icon} className="svgIcon" />
        <span class="label">{icon.label}</span>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
  }
  .icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    cursor: default;
    padding: 0;
    letter-spacing: 0;
  }

  .icons .label {
    display: none;
  }

  @media (max-width: 768px) {
    .icons {
      justify-content: center;
    }
  }
</style>
