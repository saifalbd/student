 <template>
    <app>
      <b-card>
           <b-table striped :items="items"  sort-desc.sync="name" :fields="fields" responsive="sm">
      <template v-slot:cell(action)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
         </template>
          <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>birth_date:</b></b-col>
            <b-col>{{ row.item.birth_date}}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>phone:</b></b-col>
            <b-col>{{ row.item.phone }}</b-col>
          </b-row>
              <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>address:</b></b-col>
            <b-col>{{ row.item.address.join(',') }}</b-col>
          </b-row>
                <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>show:</b></b-col>
            <b-col> <b-button size="sm"  variant="outline-primary" @click="go(row.item)">
                show student
               
                </b-button></b-col>
          </b-row>
             



          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
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
                   "action"
                  
                  ],
                  downFields:[
                      "birth_date",
                  "phone", 
                  "division_id", "district_id", 
                  "address", "created_at", 
                  "updated_at", 
                 
                  ],
                items:[  ],
               
            }
        },
        methods: {
            go(item){
                this.$router.push({name:'show', params: { id: item.id }});
            },
           async fetch(){
               let {data} = await Axios.get('students')
               this.items = data.map(i=>{
                   i.action = ''
                   return i;
               });
               console.log(Object.keys(data[0]));
            }
        },
        created() {
            this.fetch()
        },
    }
</script>

<style lang="css" scoped>

</style>