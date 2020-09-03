<template>
  <app>
    <vo ref="form" >
      <b-form
        @submit.prevent="onSubmit() "
        @reset="resetForm"   method="post">
        <b-card
          header="featured"
          header-tag="header"
          >
          <template v-slot:header>
            <h4 class="mb-0">add new Student</h4>
          </template>
          <b-card-text>
            <b-row>
              <!-- start input -->
              <div class="col-6" v-for="(item,index) in models" :key="index">
                <vp :rules="item.rules" v-slot="{ valid, errors }">
                  <b-form-group :label="item.label" :invalid-feedback="invalidFeedback(errors[0])" :id="item.name">
                    <!-- is date -->
                    <b-form-datepicker v-if="item.type && item.type =='date'" 
                      :name="item.name"  v-model="item.value" :state="state(valid, errors,item.name)" trim></b-form-datepicker>
                    <b-form-tags
                      v-else-if="item.type && item.type =='tags'" 
                      :name="item.name"  v-model="item.value" :state="state(valid, errors)" trim></b-form-tags>
                    <b-form-input 
                      v-else-if="!item.options && !item.type"
                      :placeholder="item.pl"
                      :name="item.name"  v-model="item.value" :state="state(valid, errors)" trim
                      ></b-form-input>
                    <b-form-select 
                      v-else
                      :name="item.name" 
                      @change="change($event,item.name)"
                      :disabled='item.disabled?true:false'
                      v-model="item.value" :state="state(valid, errors)" trim>
                      <option   value="" selected>select {{item.label}}</option>
                      <option  v-for="(op,i) in item.options" :key="i" :value="op.v" v-text="op.t"></option>
                    </b-form-select>
                  </b-form-group>
                </vp>
              </div>
              <!-- end input -->
            </b-row>
          </b-card-text>
          <b-button type="submit" variant="primary">Add New Student</b-button>
        </b-card>
      </b-form>
    </vo>
  </app>
</template>
<script>
  import app from '@/components/layout/authApp.vue';
  import ownObj from '../plugins/ownObj'
  import Axios from '../plugins/axios'
      export default {
          components:{app},
            methods:{
               
              hasSsError(name){
              console.log(this.sserrors)    
                  if(name in this.sserrors){
  
                      return this.errors[name][0];
                  }
                  return false;
              },
              invalidFeedback(e){
                //  let sse = this.hasSsError(name);
                  return e;
              },
          formData(){
               let obj = new Object;
               this.models.forEach((item)=>{
                  obj[item.name] = item.value;
              });
             
               return  obj;
          },
        resetForm(){
  
        },
       async  onSubmit(){
        let success =   await   this.$refs.form.validate();
          if (!success) {
            return;
          }
          
         try {
           
            let id = this.$route.params.id;
           
              let formData = this.formData();
        await Axios.put('students/'+id,formData)
          this.$router.push({name:'show', params: { id }})
       
         } catch (error) {
             let code = error.response.status;
             if(code ==422){
                 this.sserrors = error.response.data.errors;
                
                 ownObj.addError.call(this,this.sserrors)
                 
             }
            
         }
      
          
  
        }
        ,
        state(valid, errors){
             //let sse = this.hasSsError(name);
            return errors[0]  ? false : (valid ? true : null);
        },
       async fetchDivisions(){
          try {
            const {data} = await Axios.get('divisions');
         let check =  this.models.find(i=>i.name =='division_id') 
         check.options =  data.map(i=>{
              return {
                v:i.id,
                t:i.name
              }
            })
          } catch (error) {
            console.error(error)
          }
        },
             async fetchDistricts(id){
          try {
              let check =  this.models.find(i=>i.name =='district_id') 
              check.disabled = true;
               check.value = '';
  
         
            const {data} = await Axios.get('divisions/'+id);
            console.log(data)
       
         check.options =  data.map(i=>{
              return {
                v:i.id,
                t:i.name
              }
            })
             check.disabled = false;
          } catch (error) {
            console.error(error)
          }
        },
        change(value,name){
          if(name=='division_id'){
  
            this.fetchDistricts(value)
          }
        },
         async fetch(){
                try {
                    let id = this.$route.params.id;
                     let {data} = await Axios.get('students/'+id)
               
                     //address,address,class_name,fee,id,name,phone,section
                     
                     for (const key in data) {
                       
                         let check =  this.models.find(i=>i.name ==key);
                        // console.log(check)
                         if (check) {
                             check.value = data[key]
                            
                             
                         }
                     }
                     const {name}= data;
                     this.models.find(i=>i.name =='name').value = name;
                       return Promise.resolve(data);
                } catch (error) {
                    console.error(error)
                }
              
                 //console.log(Object.keys(data[0]));
              }
  
    },
   async created() {
        await    this.fetch();
      this.fetchDivisions()
    },
          data(){
              return {
              sserrors:{},
          models:[
  {
  name: "name",
  label: "name",
  pl: "student name hear",
  value: " ",
  rules:"required",
  message: ""
  },
  {
  name: "class_name",
  label: "class name",
  value: "1",
  rules:"required",
  message: "",
  options:[
      {v:1,t:'one'},
      {v:2,t:'two'},
      {v:3,t:'three'},
      {v:4,t:'four'},
      {v:5,t:'five'},
      {v:6,t:'six'},
      {v:7,t:'seven'},
      {v:8,t:'eight'},
      {v:9,t:'nine'},
      {v:10,t:'ten'},
  ]
  },
  {
  name: "section",
  label: "section",
  rules:"required",
  value: "A",
  message: "",
  options:[
      {v:'A',t:'Section A'},
      {v:'B',t:'Section B'},
      {v:'C',t:'Section C'},
  ]
  },
  {
  type:'date',
  name: "birth_date",
  label: "birth date",
  pl: "student fee hear",
  rules:"required",
  value: "",
  message: ""
  },
  {
  name: "fee",
  label: "fee per month",
  pl: "student fee hear",
  rules:"required|numeric",
  value: " ",
  message: ""
  },
  {
  name: "phone",
  label: "phone (optional)",
  pl: "student phone number",
  rules:"required",
  value: " ",
  message: ""
  },
  
  {
  name: "division_id",
  label: "division",
  rules:"required",
  value: "1",
  message: "",
  options:[]
  },
  {
  disabled:true,
  name: "district_id",
  label: "district",
  rules:"required",
  value: "",
  message: "",
  options:[]
  },
  {
      type:'tags',
  name: "address",
  label: "address",
  pl: "student address hear",
  value: [ ],
  rules:"",
  message: "amar ssonar bangla"
  }
  ],
              }
          },
          
  
        
      }
</script>
<style lang="css" scoped>
</style>