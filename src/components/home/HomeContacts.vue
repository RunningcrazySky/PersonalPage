<template>
    <div class="contacts">
        <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-42KkZGWkZicjZ6FhoyUhr_ZkIeSnpaT0ZyQkg" target="_black">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxiang"></use>
          </svg>
        </a>
        <a href="https://blog.csdn.net/weixin_64210950?type=blog" target="_black">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-csdn"></use>
          </svg>
        </a>
        <a href="https://twitter.com/runningcrazysky" target="_black">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-14"></use>
          </svg>
        </a>
        <a href="https://github.com/RunningcrazySky" target="_black">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github3"></use>
          </svg>
        </a>
    </div>
</template>

<script>
export default {
    name:'HomeContacts',
}
</script>

<style lang='less' scoped>
  .contacts{
    padding: 1rem;
    background-color: var(--white);
    margin-bottom: .625rem;
    svg{
      font-size: 1.25rem;
      margin: 0 1.5rem;
      cursor: pointer;
    }
  }
</style>