<template>

 <main>
     

        <!-- HEADER -->
        <header class="header">
          
          <div class="logo">
            <img src="@/assets/images/logo.svg" alt="Logo">
            </div>

            <nav>
              <a href="#" v-for="navigationLink in navigation">{{navigationLink}}</a>
            </nav>
          
        </header>

        <!--  PRESENTATION  -->

        <section class="presentation">
          
          <!-- LEFT -->

          <div class="left">
            
            <h1 id="mainTitle">All your files in one secure location, accessible anywhere.</h1>
              <p id="mainParagraph">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family,and co-workers.</p>
              
              <div class="getStarted">
                <form>
                <input type="email" name="mail" id="mail" placeholder="Enter your email" >
                <p class="errorMsgHidden">Please check your email</p>
                <input id="submitButton" type="submit" value="Get Started">
                </form>
              </div>

          </div>

          <!-- RIGHT -->

          <div class="right">
            <img src="@/assets/images/illustration-1.svg" alt="">
          </div>
        </section>


        <!-- PRODUCTIVE -->

        <section class="productive">
          <!-- <img src="@/assets/" alt=""> -->
        </section>
 </main>


</template>

<script>

  export default {
    
    data(){
      return {
        navigation : ['Features','Team','Sign In']
      }
    },

    mounted:function(){
      this.checkingEmailFormat();
    },

    methods: {
      checkingEmailFormat() {
        const form = document.querySelector('form')

        form.addEventListener('submit',(e) => {
           e.preventDefault()

      
          const errorMsgHidden = document.querySelector('.errorMsgHidden')
          const mail = document.getElementById('mail')
          let regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)


           if(regexMail.test(mail.value)){

             alert('Your email have been send !')
            errorMsgHidden.style.visibility = "hidden"
           }
           else if(!regexMail.test(mail.value))
            errorMsgHidden.style.visibility = "visible"

          
        })
      }
    },
  }

</script>

