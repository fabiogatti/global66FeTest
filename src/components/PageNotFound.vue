<template>
    <h1 class="text-4xl font-bold mb-2.5">{{ $t('notFound.title') }}</h1>
    <p class="text-xl font-medium mb-6">{{ $t('notFound.subtitle') }}</p>
    <RouterLink to="/">
        <button>{{ $t('notFound.button') }}</button>    
    </RouterLink>
</template>