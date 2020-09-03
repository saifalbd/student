let obj =  {

 
    makeError(error){
        let el = document.createElement('div');
        el.setAttribute("tabindex", "-1");
        el.setAttribute("tabindex", "-1");
        el.setAttribute("role", "alert");
        el.setAttribute("aria-live", "assertive");
        el.setAttribute("aria-atomic", "true");
        el.setAttribute("class", "invalid-feedback");
        el.textContent = error;
        return el;
    },
    addError(errors){

        //must be bind with vue
        for (const key in errors) {
            console.log(key)
          let el  =     this.$el.querySelector(`#${key}`);
         
           if(el){
            let  group = el.querySelector(`div[role="group"]`)
            if (group ) {
                console.log(group)
                let input = group.querySelector(`[name="${key}"]`)
                console.log(input)
              if (input.classList.contains("is-valid")) {
                  input.classList.remove('is-valid')
              }
              input.classList.add('is-invalid')
              let error = obj.makeError( errors[key]);
              input.addEventListener('focus',()=>{
                  error.remove();
              })
group.appendChild(error)

            }


           }


        }
    },
    async fileSrc(file){

        return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
           resolve(reader.result);
        }
        reader.onerror = (e)=>{
            reject(e);
          };

    });
    }



}


export default obj;