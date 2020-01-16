<template>
    <v-breadcrumbs :items="items">
        <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
        </template>
    </v-breadcrumbs>
</template>

<script>
export default {
    data: () => ({
        breadcrumbs: [
          {
            text: 'Home',
            href: 'breadcrumbs_dashboard',
          },
          {
            text: 'Link 1',
            href: 'breadcrumbs_link_1',
          },
          {
            text: 'Link 2',
            href: 'breadcrumbs_link_2',
          },
        ],
    }),
    computed: {
        items(){
            let last = this.breadcrumbs.length-1
            return this.breadcrumbs.map((item, i) => {
                return {
                    text: item.text,
                    disabled: i==last,
                    href: item.href
                }
            });
        }
    }
}

</script>
