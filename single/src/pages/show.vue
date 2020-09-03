<template>
    <app>
      <b-card>
           <b-table stacked :items="items"  sort-desc.sync="name" :fields="fields" responsive="sm">
      <template v-slot:cell(action)="row">
          <b-button size="sm"  @click="edit()" variant="outline-danger">edit</b-button>
        <b-button size="sm"  @click="remove(row.id)" variant="outline-danger">remove </b-button>
         </template>
          <template v-slot:cell(address)="row">
        {{ row.item.address.join(',') }}
         </template>
          
        
           </b-table>
      </b-card>
    </app>
</template>
 
<script>
import app from '@/components/layout/authApp.vue'
import Axios from '../plugins/axios'
    export default {
        components:{app},
        data(){
            return {
                 fields:["id", "name",
                 "class_name", 
                 "section", 
                  "fee", 
                     "birth_date",
                  "phone", 
                  "division_id", "district_id", 
                  "address", 
                  "created_at", 
                  "updated_at", 
                   "action"
                  
                  ],
                  downFields:[
                   
                 
                  ],
                items:[  ],
               
            }
        },
        methods: {
            edit(){
                 let id = this.$route.params.id;
                this.$router.push({name:'edit',params: { id }})
            },
            async remove(id){
                try {
                    let id = this.$route.params.id;
                    await Axios.delete('students/'+id)
                  this.$router .push({ name: 'home' })
                } catch (error) {
                       console.error(error)
                }
                
console.log(id)
            },
           async fetch(){
              try {
                  let id = this.$route.params.id;
                   let {data} = await Axios.get('students/'+id)
               
               this.items = [data].map(i=>{
                   i.action = ''
                   return i;
               });
              } catch (error) {
                  console.error(error)
              }
               //console.log(Object.keys(data[0]));
            }
        },
        created() {
            this.fetch()
        },
    }
</script>

<style lang="css" scoped>

</style>