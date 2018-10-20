<template>
    <v-client-table 
          :data="tableData"
          :columns="columns" 
          :options="options">
    </v-client-table>
</template>

<script>
export default {
    props: ['doctors',],
    data() {
        return {
            columns: [
                'ID',
                'Email',
                'Address',
                'Registration Number',
                'Accept',
                'Delete'
            ],
            tableData: [
                {
                    id: 'ID',
                    name: 'Rumi',
                    album: 'Album'
                },
                {
                    id: 'ID',
                    name: 'Song Name',
                    album: 'Album'
                },
            ],
            options: {
                headings: {
                    name: 'Name',
                    email: 'Email',
                    address: 'Address',
                    registration: 'Registration Number',
                    accept: 'Accept',
                    delete: 'Delete'
                },
                sortable: ['name', 'email'],
                filterable: ['name', 'email']
            }
        }
    },
}
</script>

