<template>
  <main class="content">
    <router-view />
  </main>
</template>

<style>
.content {
  @apply mx-auto
  p-4
  md:p-6
  pt-8
  md:pt-24
  max-w-[80ch] 
  prose 
  md:prose-lg
  prose-a:underline-offset-2
  prose-blockquote:border-l-4
  prose-blockquote:border-yellow-400
  prose-blockquote:pl-6
  prose-blockquote:font-normal
  prose-blockquote:not-italic
  prose-blockquote:text-gray-600
  prose-p:before:content-none
  prose-p:after:content-none
  prose-h1:!mb-2
  prose-h2:!text-2xl
  prose-h2:!mt-16
  prose-h2:!mb-4
  prose-p:mb-0
  prose-strong:font-medium
  prose-thead:hidden
  first:prose-td:w-24
  first:prose-td:text-gray-400;
}

small {
  @apply block -mt-3 text-gray-500;
}
small a {
  @apply !text-gray-500;
}
</style>
