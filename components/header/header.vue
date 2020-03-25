<template>
  <header class="header header-container">
    <div class="header__logo"><i>KAIS</i></div>
    <div class="mobile-nav-btn">
      <span class="mobile-nav-inner"></span>
    </div>
    <nav class="nav-wrapper">
      <ul class="nav-list">
        <li class="nav-list__item">
          <a href="#" class="active">Frontend</a>
          <span class="nav-dot"></span>
        </li>
        <li class="nav-list__item">
          <a href="#">Frontend</a>
          <span class="nav-dot"></span>
        </li>
        <li class="nav-list__item">
          <a href="#">Frontend</a>
          <span class="nav-dot"></span>
        </li>
        <li class="nav-list__item">
          <a href="#">Frontend</a>
          <span class="nav-dot"></span>
        </li>
        <li class="nav-list__item">
          <a href="#">Frontend</a>
          <span class="nav-dot"></span>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    const theme = window.localStorage.getItem('THEME')
    this.setTheme(theme || 'light')
  },
  methods: {
    ...mapActions({
      setTheme: 'app/setTheme'
    })
  },
  head() {
    return {
      bodyAttrs: {
        id: 'light'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.header-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  max-width: 65rem;
  height: 70px;
}
.header {
  &__logo {
    i {
      font-size: 30px;
    }
  }
}
.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
  @media (max-width: 1023px) {
    display: none;
  }
  &__item {
    margin: 5px 12px;
    position: relative;
    font-weight: 700;
    a {
      cursor: pointer;
      transition: $theme-transition;
      &:hover ~ .nav-dot {
        background-color: $nav-dot-color;
      }
    }
    .active {
      & ~ .nav-dot {
        background-color: var(--theme-active);
      }
      &:hover ~ .nav-dot {
        background-color: var(--theme-active);
      }
    }
    .nav-dot {
      position: absolute;
      top: -4px;
      right: -10px;
      border-radius: 50%;
      width: 7px;
      height: 7px;
      transition: all 0.25s ease;
    }
  }
}
</style>
